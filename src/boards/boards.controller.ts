import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }
}

//is equals to ...
// @Controller('boards')
// export class BoardsController {
//   boardsService: BoardsService;
//   constructor(boardsService: BoardsService) {
//     this.boardsService = boardsService;
//   }
// }
