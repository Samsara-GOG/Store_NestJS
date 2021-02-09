import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MusicDto {
  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly singer: string;

  @IsString({ each: true })
  readonly platform: string[];
}
