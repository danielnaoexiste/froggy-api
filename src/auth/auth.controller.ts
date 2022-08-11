import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/schemas/user.schema';
import { AuthUser } from 'src/utils/decorators';
import { AuthenticatedGuard, DiscordAuthGuard } from 'src/utils/Guards';
import { ROUTES } from '../utils/constants';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    console.log('Login');
  }

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect(`${process.env.DASHBOARD_BASE_URL}/dashboard`);
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@AuthUser() user: User) {
    return user;
  }

  @Post('logout')
  logout() {
    console.log('Logout');
  }
}
