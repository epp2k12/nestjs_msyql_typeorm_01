import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async getUsers() {

        return await this.usersService.findUsers();

    }

    @Get(':id') 
    async getUserByID(@Param('id', ParseIntPipe) id: number) {

        // try {
            return await this.usersService.findUser(id);
        // } catch (error) {
        //     throw new NotFoundException();
            
        // }
        
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {

        // #test only #001
        // const { confirmPassword, ...userDetails  } = createUserDto;        
        // this.usersService.createUser(userDetails);

        return await this.usersService.createUser(createUserDto)
    }


    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {

        return await this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number) {

        return await this.usersService.deleteUser(id);
    }

    @Post(':id/profiles')
    createUserProfile(@Param('id', ParseIntPipe) id:number, 
    @Body() createUserProfileDto: CreateUserProfileDto) {

        return this.usersService.createUserProfile(id, createUserProfileDto);

    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createUserPostDto: CreateUserPostDto) {

        return this.usersService.createUserPost(id, createUserPostDto)
    }



}
