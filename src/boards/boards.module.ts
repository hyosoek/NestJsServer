import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from './board.entity';
// import { BoardRepository } from './board.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([BoardRepository])], // deprecated
  imports: [TypeOrmModule.forFeature([BoardEntity])], // use Active Record
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
