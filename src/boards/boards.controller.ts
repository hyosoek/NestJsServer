import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto, UpdateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

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

  @Post() // pipetype : built_in_pipe + dto
  @UsePipes(ValidationPipe)
  createBoard(
    //router handler
    @Body() createBoardDto: CreateBoardDto,
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  removeBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status') // pipetype : custom_pipe +  variable
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }

  //   @Patch('/:id/status') // pipetype : custom_pipe +  variable
  //   @UsePipes(ValidationPipe)
  //   updateBoardStatus(@Param('id') id: string, @Body() dto: UpdateBoardDto) {
  //     return this.boardsService.updateBoardStatus(id, dto.status);
  //   }
}

//class is equals to ...
// @Controller('boards')
// export class BoardsController {
//   boardsService: BoardsService;
//   constructor(boardsService: BoardsService) {
//     this.boardsService = boardsService;
//   }
// }
