import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Get("users")
 findAllUsers() {
  return this.appService.findAll()
 } 

 @Post("users")
 createUser(@Body() userDto: CreateUserDto) {
  return this.appService.create(userDto)
 } 

 @Delete("users/:id")
 deleteUser(@Param("id") id: number) {
  return this.appService.remove(id)
 } 

 @Get("users/:id")
 findUser(@Param("id") id: number) { 
  return this.appService.findOne(id)
 } 

 @Get("users/:id/firstName")
 find1User(@Param("id") id: number) {
  return this.appService.find1Cust(id)
 } 

 @Patch("users/:id")
 updateUser(@Param("id") id: number, @Body() userDto: UpdateUserDto) {
  return this.appService.update(userDto,id)
 } 
}
