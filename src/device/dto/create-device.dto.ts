//import {ApiProperty} from "@nestjs/swagger";
//import {IsEmail, IsString, Length} from "class-validator";

export class CreateDeviceDto {
  //@ApiProperty({example: 'user@mail.ru', description: 'Почта'})
  //@IsString({message: 'Должно быть строкой'})
  //@IsEmail({}, { message: 'Некорректный email' })
  readonly name: string;
  readonly price: number;
  readonly brandId: string;
  readonly typeId: string;
  readonly info: string;
  //@ApiProperty({ example: '12345', description: 'пароль' })
  //@IsString({ message: 'Должно быть строкой' })
  //@Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
}
