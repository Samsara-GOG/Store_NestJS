import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VideoDto {
  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly director: string;

  @IsNumber()
  readonly price: number;

  @IsString({ each: true })
  readonly platform: string[];
}
