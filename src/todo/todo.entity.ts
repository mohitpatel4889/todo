import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { EntityWithPmsDataAndDates } from './EntityWithDates.entity';

@Entity()
export class Todo extends EntityWithPmsDataAndDates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;
  @Column(
    {
      nullable: true
    }
  )
  isCompleted: boolean;

  @Column(
    {
      nullable: true
    }
  )
  isVisible: boolean;

  @BeforeInsert()
  beforeInsertActions() {
    this.isCompleted = false;
    this.isVisible = true;

  }
}
