import nodemailerMock from 'nodemailer-mock';
import mailConfig from '@config/mail';

const { host, port, secure, auth } = mailConfig;

const transport = nodemailerMock.createTransport({
  host,
  port,
  secure,
  auth: auth.user ? auth : null,
});

export default transport;
