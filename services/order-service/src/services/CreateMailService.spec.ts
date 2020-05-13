import MongoMock from '@utils/tests/MongoMock';
import QueueMock from '@utils/tests/QueueMock';
import ProductsData from './structures/ProductsData';
import UserData from './structures/UserData';

import CreateMailService from '@services/CreateMailService';

import Mail from '@schemas/Mail';

describe('Create Mail and mail queue', () => {
  beforeAll(async () => {
    await MongoMock.connect();
  });

  afterAll(async () => {
    await MongoMock.disconnect();
  });

  beforeEach(async () => {
    await Mail.deleteMany({});
  });

  it('should be able to create new Mail and insert into queue job', async () => {
    const products: ProductsData = [
      {
        image: 'test',
        title: 'test',
        price: 'test',
      },
    ];

    const createMailService = new CreateMailService(products);

    const userData: UserData = {
      user_id: '1',
      user_email: 'charlesmarafao@gmail.com',
    };

    await createMailService.run(userData);

    const mail = await Mail.findOne({ recipient: userData.user_email });

    expect(mail).toBeTruthy();

    expect(QueueMock.add).toHaveBeenCalled();
  });
});
