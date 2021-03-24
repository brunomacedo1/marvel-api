import { Controller, Get, Res, HttpStatus, Query, Param } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import * as MOCKED_RESPONSE from '../application.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api')
  getApplicationJson(@Res() res: Response): any {
    res.status(HttpStatus.OK).json(MOCKED_RESPONSE); // retorna os dados do json
  }

  @Get('movies/:imgId')
  test(@Param('imgId') imgId, @Res() res) {
    return res.sendFile(imgId, { root: 'public/movies' }); //retorna o cartaz do filme
  }

  @Get('chars/:imgId')
  test2(@Param('imgId') imgId, @Res() res) {
    return res.sendFile(imgId, { root: 'public/chars' }); //retorna a imagem do personagem
  }
}
