import { Test, TestingModule } from '@nestjs/testing';
import { PostHelloController } from './post-hello.controller';

describe('PostHello Controller', () => {
  let controller: PostHelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostHelloController],
    }).compile();

    controller = module.get<PostHelloController>(PostHelloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
