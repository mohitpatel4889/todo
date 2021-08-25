import { Factory } from 'typeorm-factory';
import { Todo } from './../src/todo/todo.entity';
import * as Faker from 'faker';

export const TodoFactory = new Factory(Todo)
  .sequence('content', () => Faker.lorem.sentence())
  .sequence('isVisible', () => Faker.random.boolean())
  .sequence('isCompleted', () => Faker.random.boolean());
