import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from 'src/models/user.schema';
import { IUserService } from './user.interface';
import { IUpdateUserDetails, IUserDetails } from 'src/common/interfaces';

@Injectable()
export class UserService implements IUserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(details: IUserDetails) {
    console.log('Create User', details);
    const createdUser = new this.userModel(details);
    return createdUser.save();
  }

  async updateUser(user: User, details: IUpdateUserDetails) {
    console.log('Update User');
    const updatedUser = await this.userModel.findOneAndUpdate(
      { discord_id: user.discord_id },
      details,
      { new: true },
    );

    return updatedUser;
  }

  async findUser(discordId: string) {
    console.log('Find User');
    const user = await this.userModel.findOne({ discord_id: discordId });
    return user;
  }
}
