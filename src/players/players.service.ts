import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayerInterface } from './interfaces/player.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);
  private readonly player: PlayerInterface[] = [];

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    await this.create(createPlayerDto);

    this.logger.log(`createPlayerDto: ${JSON.stringify(createPlayerDto)}`);
  }

  private create(createPlayerDto: CreatePlayerDto): void {
    const { name, email, phoneNumber } = createPlayerDto;

    const player: PlayerInterface = {
      _id: uuid(),
      name,
      email,
      phoneNumber,
      ranking: 'A',
      position: 1,
      urlPhotoPlayer:
        'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
    };

    this.player.push(player);

    this.logger.log(`player: ${JSON.stringify(player)}`);
  }
}
