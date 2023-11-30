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
      for (let i = 0; i < idsString.length; i += 20) {
        const ids = idsString.slice(i, i + 20);
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

  async findHistory({ ids, range, interval }) {
    const idsString = ids.split(',');
    // run an await loop over the idsString array and each loop has 10 elements
    const promises = [];

    const asyncIterator = (async function* () {
      // returns 10 elements at a time
      for (let i = 0; i < idsString.length; i += 20) {
        const ids = idsString.slice(i, i + 20);
        yield ids;
      }
    })();
    const stocksIterator = async () => {
      for await (const value of asyncIterator) {
        const response = await firstValueFrom(
          this.httpService.get(
            `${this.API}/quote/${value}?range=${range}&interval=${interval}&token=${this.TOKEN}`,
          ),
        );
        promises.push(response.data);
      }
    };
    return stocksIterator().then(() => promises);
  }

  async findOne(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.API}/quote/${id}?token=${this.TOKEN}`),
    );
    return response.data;
  }

  async findDividends(ids: string) {
    const idsString = ids.split(',');
    // run an await loop over the idsString array and each loop has 10 elements
    const promises = [];

    const asyncIterator = (async function* () {
      // returns 10 elements at a time
      for (let i = 0; i < idsString.length; i += 20) {
        const ids = idsString.slice(i, i + 20);
        yield ids;
      }
    })();
    const stocksIterator = async () => {
      for await (const value of asyncIterator) {
        console.log(
          `${this.API}/quote/${value}?range=ytd&interval=1d&token=${this.TOKEN}`,
        );
        const response = await firstValueFrom(
          this.httpService.get(
            `${this.API}/quote/${value}?range=1y&interval=3mo&dividends=true&token=${this.TOKEN}`,
          ),
        );
        promises.push(response.data);
      }
    };
    return stocksIterator().then(() => promises);
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
