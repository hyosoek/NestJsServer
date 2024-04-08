import {
  BaseEntity,
  Column,
  Entity,
  Geometry,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';

@Entity() // it means 'create table'
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  static async findAll() {
    // usually, doesn't exist built in function is declared
    return this.createQueryBuilder('user').getMany();
  }
}
