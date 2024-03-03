import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoard(@Query('test') test: string): Board[] {
    console.log(test);
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    // Can load all body data with : @Body() body...?
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
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
