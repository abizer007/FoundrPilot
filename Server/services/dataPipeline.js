// server/services/dataPipeline.js
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'solofoundr-ai',
  brokers: [process.env.KAFKA_BROKER]
});

// Market data consumer
export const startMarketDataConsumer = async (io) => {
  const consumer = kafka.consumer({ groupId: 'market-data-group' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'market-trends' });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const data = JSON.parse(message.value.toString());
      io.emit('market-update', data);
    }
  });
};
