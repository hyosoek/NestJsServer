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
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto, UpdateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/:id') // boards/1
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.boardsService.getBoardByID(id);
  }

  @Get()
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  // @Get() // boards?id=1
  // getBoardById(@Query('id', ParseIntPipe) id: number): Promise<Board> {
  //   return this.boardsService.getBoardByID(id);
  // }

  @Post() // pipetype : built_in_pipe + dto
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardsService.deleteBoardByID(id);
  }

  @Patch('/:id/status') // pipetype : custom_pipe +  variable
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
