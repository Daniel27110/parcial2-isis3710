import { Module } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { PropuestaController } from './propuesta.controller';

@Module({
  providers: [PropuestaService],
  controllers: [PropuestaController]
})
export class PropuestaModule {}
