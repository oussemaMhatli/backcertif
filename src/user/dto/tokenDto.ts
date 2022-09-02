import { IsNotEmpty, IsEmail } from 'class-validator';
export class TokenDto {
  @IsNotEmpty()
  id?: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  postalcode: number;
  @IsNotEmpty()
  score: number;
  @IsNotEmpty()
  Activationcode: string;
  @IsNotEmpty()
  isEmailConfirmed: boolean;
  @IsNotEmpty()
  RegistrationDate: Date;
  role: number;
  examDate: Date;
  passedExam: boolean;
  img:string;
  Examcode: string;


}
