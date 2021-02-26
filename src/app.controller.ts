import { Controller, Get, Res, HttpStatus, Query, Param } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import * as MOCKED_RESPONSE from '../application.json'; // or use const inside the controller function


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPaymentMoethod(@Res() res: Response): any {
    res.status(HttpStatus.OK).json(MOCKED_RESPONSE); // <= this sends response data as json
  }

  @Get('movies/:imgId')
  test(@Param('imgId') imgId, @Res() res) {
    return res.sendFile(imgId, { root: 'public/movies' });
  }

  @Get('chars/:imgId')
  test2(@Param('imgId') imgId, @Res() res) {
    return res.sendFile(imgId, { root: 'public/chars' });
  }
}