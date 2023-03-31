import {  Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Body, Post, Query } from '@nestjs/common/decorators';
import { ApiOperation } from '@nestjs/swagger';
import { Proposal } from './dto/ehr.dto';
// import { Proposals } from './entities/ehr.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('create')
  @ApiOperation({ summary: 'new Contract' })
  create(
    @Body() body: Proposal,
  ): Promise<{ contractAddress: string; data: Proposal }> {
    return this.appService.create(body);
  }
}
