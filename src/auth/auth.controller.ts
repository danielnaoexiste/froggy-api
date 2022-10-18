import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/models/user.schema';
import { AuthUser } from 'src/common/decorators';
import { AuthenticatedGuard, DiscordAuthGuard } from 'src/common/guards';
import { ROUTES } from 'src/common/constants';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @ApiExcludeEndpoint()
  @UseGuards(DiscordAuthGuard)
  login() {
    console.log('Login');
  }

  @Get('redirect')
  @ApiExcludeEndpoint()
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect(`${process.env.DASHBOARD_BASE_URL}/server-selection`);
  }

  @Get('status')
  @ApiExcludeEndpoint()
  @UseGuards(AuthenticatedGuard)
  status(@AuthUser() user: User) {
    return user;
  }

  @Post('logout')
  @ApiExcludeEndpoint()
  logout() {
    console.log('Logout');
  }
}
