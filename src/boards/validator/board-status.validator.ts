import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { BoardStatus } from '../board.model';
import { BadRequestException } from '@nestjs/common';

@ValidatorConstraint({ name: 'custom', async: false })
export class CustomValidatorConstraint implements ValidatorConstraintInterface {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];
  validate(value: any): boolean {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't status of board`);
    }
    return value;
  }
  private isStatusValid(status: BoardStatus) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}

export function boardStatusValidator(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'boardStatusValidator',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: CustomValidatorConstraint,
    });
  };
}
