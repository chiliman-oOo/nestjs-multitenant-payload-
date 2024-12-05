import { ContextIdFactory, NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import { AggregateByTenantContextIdStrategy } from "./tenant.context";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ContextIdFactory.apply(new AggregateByTenantContextIdStrategy())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
