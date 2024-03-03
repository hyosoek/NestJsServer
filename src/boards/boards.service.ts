import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string): Board {
    const board: Board = {
      // why we create model to create data on db? we will use prisma...?
      id: uuid,
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board; //return what we create
  }
}
