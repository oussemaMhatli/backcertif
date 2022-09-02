import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { PassportStrategy } from '@nestjs/passport';
import {UserService} from "../user.service";
import {JwtPayload} from "../interface/jwt-payload.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'mariemmariem',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.validateUserByJwt(payload);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
