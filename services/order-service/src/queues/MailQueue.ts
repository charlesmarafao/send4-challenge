import Queue from 'bull';
import redisConfig from '@config/redis';
import MailData from '@services/structures/MailData';
import { setQueues } from 'bull-board';

export interface MailJobData {
  messageData: MailData;
}

const MailQueue = new Queue('mail', {
  redis: redisConfig,
});

setQueues(MailQueue);

export default MailQueue;
