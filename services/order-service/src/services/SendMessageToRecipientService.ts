import MailData from '@services/structures/MailData';
import QueueResponseData from '@services/structures/QueueResponseData';

import Mail from '@lib/Mail';

class SendMessageToRecipientService {
  async run(messageData: MailData): Promise<QueueResponseData> {
    try {
      await Mail.sendMail({
        to: `${messageData.recipient}`,
        subject: messageData.subject,
        text: messageData.body,
      });

      return {
        status: true,
        message: 'ok',
      };
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  }
}

export default SendMessageToRecipientService;
