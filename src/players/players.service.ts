import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayerInterface } from './interfaces/player.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Player, PlayerDocument } from './schemas/player.schema';
import { Model } from 'mongoose';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name)
    private readonly playerModel: Model<PlayerDocument>,
  ) {}

  private readonly logger = new Logger(PlayersService.name);

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    const player = await this.create(createPlayerDto);

    this.logger.log(`createPlayerDto: ${JSON.stringify(createPlayerDto)}`);

    return player;
  }

  async getPlayers(): Promise<PlayerInterface[]> {
    return this.playerModel.find().exec();
  }

  private async create(
    createUserDto: CreatePlayerDto,
  ): Promise<PlayerInterface> {
    const createdPlayer = await this.playerModel.create(createUserDto);

    this.logger.log(`player: ${JSON.stringify(createdPlayer)}`);
    return createdPlayer;
  }
}
