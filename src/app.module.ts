import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { SportsController } from './sports/sports.controller';

@Module({
  imports: [PlayersModule],
  controllers: [AppController, SportsController],
  providers: [AppService],
})
export class AppModule {}
