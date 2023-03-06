import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';
import { PlayerInterface } from './interfaces/player.interface';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {
    this.playersService = playersService;
  }

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { email } = createPlayerDto;
    const newPlayer = await this.playersService.createPlayer(createPlayerDto);

    return JSON.stringify({
      message: `Player ${email} successfully created!`,
      player: newPlayer,
    });
  }

  @Get()
  async getPlayers(): Promise<PlayerInterface[]> {
    return await this.playersService.getPlayers();
  }
}
