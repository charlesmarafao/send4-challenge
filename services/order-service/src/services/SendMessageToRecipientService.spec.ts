import MailMock from '@utils/tests/MailMock';

import SendMessageToRecipientService from '@services/SendMessageToRecipientService';

describe('Send Message to Recipient', () => {
  it('should send message to the recipient', async () => {
    const SendMessageToRecipient = new SendMessageToRecipientService();

    SendMessageToRecipient.run({
      recipient: 'charlesmarafao@gmail.com',
      subject: 'Test send4',
      body: 'test',
    });

    expect(MailMock.sendMail).toHaveBeenCalled();
  });
});
