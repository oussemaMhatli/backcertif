import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from './model/usermodel';
import { JwtPayload } from './interface/jwt-payload.interface';
import { TokenDto } from './dto/tokenDto';
import * as nodemailer from 'nodemailer';

import { Categori } from '../categorie/models/catModel';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async registre(user: User): Promise<User> {
    if (!(await this.findUserByEmail(user.email))) {
      return await new this.userModel({
        ...user,
        createdAt: new Date(),
      }).save();
    } else {
      throw new UnprocessableEntityException('user already exists.');
    }
  }

  async findUserByEmail(email): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async login(tokenDto: TokenDto) {
    const user = await this.userModel.findOne({
      email: tokenDto.email,
      password: tokenDto.password,
    });

    if (!user) {
      return null;
    } else {
      if (user) {
        const token = jwt.sign({ data: user }, 'mariemmariem');
        return token;
      } else {
        return null;
      }
    }
  }

  createJwtPayload(user) {
    const data: JwtPayload = {
      password: user.password,
      email: user.email,
      _id: user._id,
      name: user.name,
      postalcode: user.postalcode,
      score: user.score,
      Activationcode: user.Activationcode,
      isEmailConfirmed: user.isEmailConfirmed,
      RegistrationDate: user.RegistrationDate,
      role: user.role,
      examDate: user.examDate,
      passedExam: user.passedExam,
      img: user.img,
      Examcode: user.Examcode,
    };

    const jwt = this.jwtService.sign(data);

    return jwt;
  }

  async validateUserByJwt(payload: JwtPayload) {
    // This will be used when the user has already logged in and has a JWT
    const user = await this.userModel.findOne({
      email: payload.email,
      password: payload.password,
    });

    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async delete(id): Promise<any> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async updateCat(id: string, update: any): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, update).exec();
  }

  async findAlluser(): Promise<any[]> {
    return await this.userModel.find().sort({ date: 'ascending' }).exec();
  }

  async findOne(id: string): Promise<any> {
    return await this.userModel.findById(id).exec();
  }

  async count(): Promise<number> {
    return await this.userModel.find().count().exec();
  }

  async countwho(): Promise<number> {
    return await this.userModel.find({ passedExam: true }).count().exec();
  }
  async addMessage(msg: string, rec: string) {
    const message = msg;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      tls: {
        rejectUnauthorized: false,
      },
      port: 465,
      secure: true,
      auth: {
        user: 'oussemamhatli62@gmail.com',
        pass: 'vkzocjpnizudjcbl',
      },
    });
    const mailOptions = {
      to: rec,
      from: 'oussemamhatli62@gmail.com',
      subject: 'certification',
      html: `<ul><h5>this is your secure key : <h1>${message}</h1>  <p>`,
    };
    const sended = await new Promise<boolean>(async function (resolve, reject) {
      return await transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.log('Message sent: %s', error);
          return reject(false);
        }
        console.log('Message sent 1 : %s', info);
        resolve(true);
      });
    });
    return sended;
  }
  async updateValidation(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    user.isEmailConfirmed = true;
    return this.userModel.findByIdAndUpdate(id, user);
  }
  async updateCode(id: string, code: string): Promise<User> {
    const user = await this.userModel.findById(id);
    user.Activationcode = code;
    return this.userModel.findByIdAndUpdate(id, user);
  }
  async updateExamCode(id: string, code: string): Promise<User> {
    const user = await this.userModel.findById(id);
    user.Examcode = code;
    return this.userModel.findByIdAndUpdate(id, user);
  }
}
