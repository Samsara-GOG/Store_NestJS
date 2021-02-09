import { Injectable, NotFoundException } from '@nestjs/common';
import { VideoDto } from '../dto';

@Injectable()
export class VideoService {
  private videos: VideoDto[] = [
    {
      id: 1,
      title: 'La guerre des Mondes',
      director: 'Steven Spielberg',
      price: 15.25,
      platform: ['Amazon Prime', 'Netflix', 'Canal Play'],
    },
    {
      id: 2,
      title: 'Inglorious Basterd',
      director: 'Quentin Tarentino',
      price: 17.99,
      platform: ['Amazon Prime', 'Netflix', 'Canal Play'],
    },
    {
      id: 3,
      title: 'Shutter Island',
      director: 'Martin Scorsese',
      price: 27.55,
      platform: ['Amazon Prime', 'Netflix', 'Canal Play'],
    },
  ];

  /**
   * @name public constructor
   */
  constructor() {}

  findAll(): VideoDto[] {
    const result: VideoDto[] = this.videos;

    if (!result) {
      throw new NotFoundException('Videos not found.');
    }

    return result;
  }

  findById(id: string): VideoDto {
    const result: VideoDto = this.videos.find((video) => video.id === +id);

    if (!result) {
      throw new NotFoundException('Videos not found.');
    }

    return result;
  }

  create(video: VideoDto): void {
    const videos: VideoDto[] = this.findAll();
    this.videos.push({ id: videos.length + 1, ...video });
  }

  update(id: string, video: VideoDto): void {
    const result: VideoDto = this.findById(id);

    if (result) {
      this.videos[result.id - 1] = video;
    }
  }

  delete(id: string): void {
    const index: number = this.videos.findIndex((video) => video.id === +id);

    if (index >= 0) {
      this.videos.splice(index, 1);
    }
  }
}