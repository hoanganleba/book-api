import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  readonly username: string;
  @ApiProperty()
  readonly password: string;
  readonly created_at: Date;
}
