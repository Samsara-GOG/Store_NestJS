import { Test, TestingModule } from '@nestjs/testing';
import { VideoService } from '../../src/video/video.service';
import { VideoDto } from '../../src/dto';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideoService,
      ],
    }).compile();

    service = module.get<VideoService>(VideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all videos', () => {
    expect(service.findAll().length).toBe(3);
  });

  it('should return a video', () => {
    expect(service.findById('1').director).toBe('Steven Spielberg');
  });

  describe('actions', () => {

    it('should create a video', () => {
      // Given

      // When
      service.create(<VideoDto>{ director: 'Steven Spielberg', title: 'E.T', platform: ['Amazon Prime', 'Netflix', 'Canal Play']});

      // Then
      expect(service.findAll().length).toBe(4);
      expect(service.findById('4').title).toBe('E.T');
    });

    it('should update a video', () => {
      // Given

      // When
      service.update('1', <VideoDto>{ id: 1, director: 'Steven Spielberg', title: 'E.T', platform: ['Amazon Prime', 'Netflix', 'Canal Play']});

      // Then
      expect(service.findById('1').title).toBe('E.T');
    });

    it('should delete a video', () => {
      // Given

      // When
      service.delete('1');

      // Then
      expect(service.findAll().length).toBe(2);
    });
  });

});