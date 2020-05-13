import Mail from '@schemas/Mail';

import MailQueue from '@queues/MailQueue';

import MailData from './structures/MailData';
import ProductsData from './structures/ProductsData';
import UserData from './structures/UserData';
import { ProductsEntity } from './structures/ProductsData';

class CreateMailService {
  mailBody: string;
  subject: string;

  constructor(products: ProductsData) {
    const mailHeader =
      'Agradecemos a sua preferência, veja abaixo a lista de produtos do seu pedido.\n';

    const productsValuesToMailBody = products.map((product: ProductsEntity) => {
      return `Nome: ${product.title}, Foto: ${product.image}, Valor: ${product.price}\n`;
    });

    this.mailBody = `${mailHeader} ${productsValuesToMailBody.join('')}`;
    this.subject = 'Ótimas notícias! Você fez um pedido na Send4';
  }

  async run(user: UserData): Promise<void> {
    try {
      const mailData: MailData = {
        subject: this.subject,
        body: this.mailBody,
        recipient: user.user_email,
      };

      await Mail.create(mailData);

      await MailQueue.add({
        messageData: mailData,
      });
    } catch (error) {
      throw error;
    }
  }
}

export default CreateMailService;
