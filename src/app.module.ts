import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'admin',
    password: 'nestjs01_password',
    database: 'nestjs_test001',
    entities: [User, Profile, Post],
    synchronize: true,
  }), UsersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
