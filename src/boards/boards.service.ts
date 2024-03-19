import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardEntity } from './board.entity';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];
  constructor(
    @InjectRepository(BoardEntity)
    private boardRepository: Repository<Board>,
  ) {}

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      // why we create model to create data on db? we will use prisma...?
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board; //return what we create
  }

  getBoardByID(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found; //Callback
    // this is call by reference
  }

  deleteBoard(id: string): void {
    if (this.getBoardByID(id))
      this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardByID(id);
    board.status = status;
    return board;
  }
}
