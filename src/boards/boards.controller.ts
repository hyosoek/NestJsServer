import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  //   @Get('/')
  //   getAllBoard(@Query('testmessage') testmessage: string): Board[] {
  //     console.log(testmessage);
  //     return this.boardsService.getAllBoards();
  //   }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    // Can replace with - @Param() params: string[]
    return this.boardsService.getBoardByID(id);
  }

  @Post()
  createBoard(
    // Can load all body data with : @Body() body...?
    @Body() createBoardDto: CreateBoardDto,
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  removeBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
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
