import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
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

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PlayerInterface> {
    return this.playersService.findOne(id);
  }

  @Get()
  async getPlayers(): Promise<PlayerInterface[]> {
    return await this.playersService.getPlayers();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.playersService.delete(id);
    } catch (error) {
      return { message: error };
    }
  }
}
