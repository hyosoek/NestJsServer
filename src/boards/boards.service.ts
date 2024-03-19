import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor() {
    // private boardRepository: Repository<Board>, // private declare = make property // @InjectRepository(Board)
    const boardRepository = new Board();
    //don't need to declare, because We don't use Repository
  }

  async getAllBoards(): Promise<Board[]> {
    const data = await Board.findAll();
    return data;
  }

  async getBoardByID(id: number): Promise<Board> {
    const found = await Board.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = Board.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await Board.save(board);

    return board; //return what we create
  }

  // deleteBoard(id: string): void {
  //   if (this.getBoardByID(id))
  //     this.boards = this.boards.filter((board) => board.id !== id);
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardByID(id);
  //   board.status = status;
  //   return board;
  // }
}
