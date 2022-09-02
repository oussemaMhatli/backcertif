export interface JwtPayload {
  name: string;
  email: string;
  password: string;
  postalcode: number;
  score: number;
  Activationcode: string;
  Examcode: string;

  isEmailConfirmed: boolean;
  RegistrationDate: Date;
  _id: string;
  role: number;
  examDate: Date;
  passedExam: boolean;
  img: string;
}
