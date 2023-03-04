import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {
    this.playersService = playersService;
  }

  @Post()
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { email } = createPlayerDto;
    console.log('createPlayerDto: ', createPlayerDto);

    await this.playersService.createPlayer(createPlayerDto);

    return JSON.stringify({
      message: `Player ${email} successfully created!`,
      player: createPlayerDto,
    });
  }
}
