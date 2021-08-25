import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(@Res() res) {
    res.render('todo', {
      todos: await this.todoService.findAll()
    });
  }

  @Post()
  create(@Body() content, @Res() res) {
    this.todoService.create(content);
    res.redirect('/todo');
  }
  
  @Put(':id')
  update(@Param('id') id, @Body('content') content) {
    this.todoService.update(id, content);
  }

  @Put(':id/completed')
  completed(@Param('id') id, @Body('completed') completed) {
    this.todoService.markCompleted(id, completed);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    this.todoService.delete(id);
  }
}
