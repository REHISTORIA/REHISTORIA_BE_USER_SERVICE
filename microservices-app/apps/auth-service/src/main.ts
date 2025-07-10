import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ServiceQueues } from '@rehistoria/shared';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL ?? 'amqp://localhost:5672'],
      queue: ServiceQueues.AUTH,
      queueOptions: { durable: true },
    },
  });

  await app.listen();
  console.log('Auth microservice is listening...');
}
bootstrap();
