import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  async findAll() {
    const queryBuilder = await this.todoRepository.createQueryBuilder('todo');
    queryBuilder.where('todo.isVisible is true')
    queryBuilder.where('todo.isCompleted is false')
    queryBuilder.orderBy('todo.id', 'ASC');

    return queryBuilder.getMany();
  }

  async create(todo: Todo) {
    todo.isVisible = true;
    todo.isCompleted = false;
    if(todo.content.trim() != '') // Only save if it has content
      await this.todoRepository.save(todo);
  }

  update(id: number, content: string) {
    this.todoRepository.update(id, { content: content });
  }

  markCompleted(id: number, checked: boolean) {
    this.todoRepository.update(id, { isCompleted: checked ? true : false} );
  }

  delete(id: number) {
    this.todoRepository.delete(id);
  }
}
