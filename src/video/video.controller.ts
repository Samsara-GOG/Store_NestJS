import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideoService } from './video.service';
import { VideoDto } from '../dto';

@ApiTags('video')
@Controller('video')
@ApiProduces('application/json')
@ApiConsumes('application/json')


@Controller('video')
export class VideoController {
  /**
   * @name public constructor
   * @param { VideoService } service
   */
  constructor(private readonly service: VideoService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): VideoDto[] {
    return this.service.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findById(@Param('id') id: string): VideoDto {
    return this.service.findById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() video: VideoDto) {
    return this.service.create(video);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() video: VideoDto) {
    return this.service.update(id, video);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
