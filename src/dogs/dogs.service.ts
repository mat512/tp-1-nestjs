import { Injectable } from '@nestjs/common';
import { Dog } from './dogs';

@Injectable()
export class DogsService {
  private dogs: Dog[] = [
    {
      name: 'Max',
      breed: 'Labrador Retriever',
      age: 5,
      color: 'Golden',
    },
    {
      name: 'Bella',
      breed: 'German Shepherd',
      age: 3,
      color: 'Black/Brown',
    },
  ];

  findAll(): Dog[] {
    return this.dogs;
  }

  findOne(id: number): Dog {
    return this.dogs[id];
  }

  remove(id: number): boolean {
    return delete this.dogs[id];
  }
}
