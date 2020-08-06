import { Test, TestingModule } from '@nestjs/testing';
import { PostHelloService } from './post-hello.service';

describe('PostHelloService', () => {
  let service: PostHelloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostHelloService],
    }).compile();

    service = module.get<PostHelloService>(PostHelloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
