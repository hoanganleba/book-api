import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  readonly firstname: string;
  @ApiProperty()
  readonly lastname: string;
  @ApiProperty()
  readonly phoneNumber: string;
  @ApiProperty()
  readonly address: string;
}
