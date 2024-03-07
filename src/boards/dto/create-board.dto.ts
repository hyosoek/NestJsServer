import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../board.model';
import { boardStatusValidator } from '../validator/board-status.validator';

export class CreateBoardDto {
  @IsNotEmpty() // handler level
  title: string;

  @IsNotEmpty()
  description: string;
}

export class UpdateBoardDto {
  @boardStatusValidator()
  status: BoardStatus;
}

// Can't use like this

// import { NotFoundException } from '@nestjs/common';

// export class CreateBoardDto {
//   title: string;
//   description: string;
//   constructor() {
//     if (this.title.length == 0) {
//       throw new NotFoundException();
//     }
//     if (this.description.length == 0) {
//       throw new NotFoundException();
//     }
//   }
// }

// Dto is Validated by Pipe, so we should use Decorator
// But Make decorator is so hard, we will use class-validator(already made) or with overriding it.
