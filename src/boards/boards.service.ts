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
    //don't need to declare Repository, because We don't use Repository
  }

  async getAllBoards(): Promise<Board[]> {
    return await Board.find();
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

  async deleteBoardByID(id: number): Promise<void> {
    // we can use remove
    const result = await Board.delete(id); // if single data, delete pk
    // const board = Board.delete({id:id}); // if object data, it like ''where ??=?? AND ??=??'
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id : ${id} `);
    }
    console.log(result);
    // return result;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardByID(id);

    board.status = status;
    await Board.save(board);

    return board;
  }
}
