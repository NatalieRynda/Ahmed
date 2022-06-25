import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AppService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  create(userDto: CreateUserDto) {
    return this.usersRepository.save(userDto)
  }
//not working, trying to insert
  updateOld(userDto: UpdateUserDto, id: number) {
    return this.usersRepository.save({
      id: id,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      city: userDto.city

    })
  }

  update(userDto: UpdateUserDto, id: number) {
    return this.usersRepository.update({
      id: id,
    },
    {
      ...userDto
    }
    )
  }

  
  async find1Cust(id: number) {
    const firstName = await this.usersRepository.findOne({
      select: {
        firstName: true,
      },
      where: {
        id: id,
      },
    });
    return firstName;
  }
}
