export default () => ({
  smtp: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    from: process.env.FROM_EMAIL,
  },
  rabbitmq: {
    connectionString: process.env.RABBITMQ_CONNECTION,
    queue: process.env.RABBITMQ_QUEUE,
  },
});
