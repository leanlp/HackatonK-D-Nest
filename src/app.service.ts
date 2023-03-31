import { Injectable } from '@nestjs/common';
import { Proposal } from "./dto/ehr.dto"

@Injectable()
export class AppService {
  create(body: any): Promise<{ contractAddress: string; data: Proposal; }> {
    throw new Error('Method not implemented.');
  }
  // getHello(): string {
  //   return 'Hello World!';
  // }
  async deployContract(data: string[]) {
    console.log('Deploying contract', data);
    let contract = null;
    // if (await isBalanceZero(this.signer)) {
    //   throw new Error('Not enough balance to deploy contract');
    }

}
