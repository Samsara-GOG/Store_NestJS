import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { VideoDto } from '../../src/dto';
import { VideoService } from '../../src/video/video.service';
import { VideoModule } from '../../src/video/video.module';

describe('Video', () => {
  class MockVideoService extends VideoService {
    findAll() : VideoDto[] {
      return [{ id: 1, director: 'Steven Spielberg', title: 'La guerre des Mondes', price: 15.25, platform: [] }];
      
    }
  }

  let app: INestApplication;
  let service: VideoService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [VideoModule],
    })
      .overrideProvider(VideoService)
      .useClass(MockVideoService)
      .compile();

    app = module.createNestApplication();
    service = module.get(VideoService);
    await app.init();
  });

  it(`/GET videos`, () => {
    return request(app.getHttpServer())
      .get('/video')
      .expect(200)
      .expect(service.findAll());
  });

  it(`/GET video`, () => {
    return request(app.getHttpServer())
      .get('/video/1')
      .expect(200)
      .expect(service.findById('1'));
  });

  it(`/POST video`, () => {
    return request(app.getHttpServer())
      .post('/video')
      .expect(201);
  });

  it(`/PATCH video`, () => {
    return request(app.getHttpServer())
      .patch('/video/1')
      .expect(200);
  });

  it(`/DELETE video`, () => {
    return request(app.getHttpServer())
      .delete('/video/1')
      .expect(204);
  });
  afterAll(async () => {
    await app.close();
  });
});