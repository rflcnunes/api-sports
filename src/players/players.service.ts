import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayerInterface } from './interfaces/player.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    const player = await this.create(createPlayerDto);

    this.logger.log(`createPlayerDto: ${JSON.stringify(createPlayerDto)}`);

    return player;
  }

  private create(createPlayerDto: CreatePlayerDto): PlayerInterface {
    const { name, email, phoneNumber } = createPlayerDto;

    const player: PlayerInterface = {
      _id: uuid(),
      name,
      email,
      phoneNumber,
      ranking: 'A',
      position: 1,
    };

    this.logger.log(`player: ${JSON.stringify(player)}`);

    return player;
  }
}
