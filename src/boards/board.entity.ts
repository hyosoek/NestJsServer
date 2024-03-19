import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

  static findAll() {
    return (
      this.createQueryBuilder('user')
        // .where('user.firstName = :firstName', { firstName })
        // .andWhere('user.lastName = :lastName', { lastName })
        .getMany()
    );
  }
}
