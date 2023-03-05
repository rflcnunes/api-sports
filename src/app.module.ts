import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { SportsController } from './sports/sports.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlayersModule,
    MongooseModule.forRoot('mongodb://mongo:27017/sports', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController, SportsController],
  providers: [AppService],
})
export class AppModule {}
