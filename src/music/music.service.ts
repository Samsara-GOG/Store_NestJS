import { Injectable, NotFoundException } from '@nestjs/common';
import { MusicDto } from '../dto';

@Injectable()
export class MusicService {
  private musics: MusicDto[] = [
    {
      id: 1,
      title: 'Stupid Love',
      singer: 'Lady Gaga',
      platform: ['Deezer', 'Spotify', 'Apple music', 'Youtube'],
    },
    {
      id: 2,
      title: 'Dance Monkey',
      singer: 'Tones and I',
      platform: ['Deezer', 'Apple music', 'Youtube'],
    },
    {
      id: 3,
      title: 'Sweet but Psycho',
      singer: 'Ava max',
      platform: ['Spotify', 'Apple music'],
    },
  ];

  /**
   * @name public constructor
   */
  constructor() {}

  /**
   * @name findAll 
   * @return { MusictoAll[] }
  **/

  findAll(): MusicDto[] {
    const result: MusicDto[] = this.musics;

    if (!result) {
      throw new NotFoundException('Musics not found.');
    }

    return result;
  }

  findById(id: string): MusicDto {
    const result: MusicDto = this.musics.find((music) => music.id === +id);

    if (!result) {
      throw new NotFoundException('Musics not found.');
    }

    return result;
  }

  create(music: MusicDto): void {
    const musics: MusicDto[] = this.findAll();
    this.musics.push({ id: musics.length + 1, ...music });
  }

  update(id: string, music: MusicDto): void {
    const result: MusicDto = this.findById(id);

    if (result) {
      this.musics[result.id - 1] = music;
    }
  }

  delete(id: string): void {
    const index: number = this.musics.findIndex((music) => music.id === +id);

    if (index >= 0) {
      this.musics.splice(index, 1);
    }
  }
  
}