import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/models/user.schema';
import { AuthUser } from 'src/common/decorators';
import { AuthenticatedGuard, DiscordAuthGuard } from 'src/common/Guards';
import { ROUTES } from 'src/common/constants';

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
    res.redirect(`${process.env.DASHBOARD_BASE_URL}/server-selection`);
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
