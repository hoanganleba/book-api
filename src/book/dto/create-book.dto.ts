import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly category: string;
  @ApiProperty()
  readonly image: string;
  @ApiProperty()
  readonly author: string;
  @ApiProperty()
  readonly price: string;
  @ApiProperty()
  readonly description: string;
}
