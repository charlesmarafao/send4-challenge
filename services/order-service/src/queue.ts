import 'dotenv/config';
import MailQueue, { MailJobData } from '@queues/MailQueue';
import SendMessageToRecipientService from '@services/SendMessageToRecipientService';

MailQueue.process(async job => {
  const { messageData } = job.data as MailJobData;

  const sendMessageToRecipient = new SendMessageToRecipientService();

  const { status, message } = await sendMessageToRecipient.run(messageData);

  status ? await job.moveToCompleted() : await job.moveToFailed({ message });
});
