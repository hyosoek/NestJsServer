import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>, // private declare = make property
  ) {}

  async getAllBoards(): Promise<Board[]> {
    const data = await this.boardRepository.findAll();
    return data;
  }

  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     // why we create model to create data on db? we will use prisma...?
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board; //return what we create
  // }

  // getBoardByID(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found; //Callback
  //   // this is call by reference
  // }

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
