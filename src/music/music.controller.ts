import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MusicService } from './music.service';
import { MusicDto } from '../dto';

@ApiTags('music')
@Controller('music')
@ApiProduces('application/json')
@ApiConsumes('application/json')


@Controller('music')
export class MusicController {
  /**
   * @name public constructor
   * @param { MusicService } service
   */
  constructor(private readonly service: MusicService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): MusicDto[] {
    return this.service.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findById(@Param('id') id: string): MusicDto {
    return this.service.findById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() music: MusicDto) {
    return this.service.create(music);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() music: MusicDto) {
    return this.service.update(id, music);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
