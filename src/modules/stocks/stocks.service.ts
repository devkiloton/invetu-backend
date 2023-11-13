import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FuzzyAPI } from './models/FuzzyAPI';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StocksService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  private readonly API = this.configService.get<string>('API_URL');
  private readonly TOKEN = this.configService.get<string>('API_TOKEN');

  async findAll(ids: string) {
    const idsString = ids.split(',');
    // run an await loop over the idsString array and each loop has 10 elements
    const promises = [];

    const asyncIterator = (async function* () {
      // returns 10 elements at a time
      for (let i = 0; i < idsString.length; i += 10) {
        const ids = idsString.slice(i, i + 10);
        yield ids;
      }
    })();
    const stocksIterator = async () => {
      for await (const value of asyncIterator) {
        const response = await firstValueFrom(
          this.httpService.get(
            `${this.API}/quote/${value.join(',')}?token=${this.TOKEN}`,
          ),
        );
        promises.push(response.data);
      }
    };
    return stocksIterator().then(() => promises);
  }

  findOne(id: string) {
    return;
  }

  findDividends(id: string) {
    return;
  }

  async findFuzzy(id: string): Promise<FuzzyAPI> {
    const response = await firstValueFrom(
      this.httpService.get(
        `${this.API}/available?search=${id}&token=${this.TOKEN}"`,
      ),
    );
    const data: FuzzyAPI = response.data;
    return data;
  }
}
