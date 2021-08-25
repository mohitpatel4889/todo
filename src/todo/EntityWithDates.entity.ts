import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';
import * as moment from 'moment';

export abstract class EntityWithPmsDataAndDates {
  @Column({
    type: 'timestamp with time zone',
    nullable: true,
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updatedAt: string;

  @Column({
    type: 'timestamp with time zone',
    nullable: true,
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: string;

  @BeforeUpdate()
  public setUpdatedAt() {
    this.updatedAt = moment().utc().toISOString();
  }

  @BeforeInsert()
  public updateDates() {
    const time = moment().utc().toISOString();
    this.createdAt = time;
    this.updatedAt = time;
  }
}
