import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from './model/message';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('message')
    private readonly messageModel: Model<Message>,
  ) {}
  async createMsg(message: Message): Promise<Message> {
    return await new this.messageModel({
      ...message,
      createdAt: new Date(),
    }).save();
  }
  async pushmsg(id: string, mess: string, ids: string): Promise<any> {
    const msg = await this.messageModel.findById(id);
    const messages = { msg: mess, ids: ids, visible: true,vis:true };
    msg.messages.push(messages);
    return this.messageModel.findByIdAndUpdate(id, msg);
  }
  async verif(idS): Promise<Message> {
    return await this.messageModel
      .findOne({ idU: idS })

      .exec();
  }
  async findByuser(idU): Promise<Message> {
    return await this.messageModel
      .findOne({ idU: idU })

      .exec();
  }
  async findconvbyadmin(id): Promise<number> {
    let nbmsg = 0;
    const allmsg = await this.messageModel.find();

    if (allmsg.length > 0) {
      await allmsg.forEach((i) => {
        if (
          i.messages[i.messages.length - 1].ids != 'admin' &&
          i.messages[i.messages.length - 1].visible == true
        ) {
          nbmsg++;
        }
      });
    }
    return nbmsg;
  }
  async findconvbyuser(id): Promise<number> {
    let nbmsg = 0;
    const allmsg = await this.messageModel.find({ idU: id });

    if (allmsg.length > 0) {
      await allmsg.forEach((i) => {
        i.messages.forEach((a) => {
          if (a.ids == 'admin' && a.visible == true) {
            console.log('hey', i.messages);
            nbmsg++;
          }
        });
      });
    }

    return nbmsg;
  }
  async updateVis(): Promise<any> {
    const allmsg = await this.messageModel.find();
    if (allmsg.length > 0) {
      await allmsg.forEach(async (i) => {
        if (
          i.messages[i.messages.length - 1].ids != 'admin' &&
          i.messages[i.messages.length - 1].visible == true
        ) {
          i.messages[i.messages.length - 1].visible = false;
          console.log(i.messages[i.messages.length - 1].visible);
          await this.messageModel.findByIdAndUpdate(i._id, i);
        }
      });
    }
    return await this.messageModel.find();
  }

  async updatevisbysender(id) {
    const allmsg = await this.messageModel.findOne({ idU: id });

    if (allmsg.messages.length > 0) {
      await allmsg.messages.forEach((i) => {
        if (i.ids == 'admin' && i.visible == true) {
          i.visible = false;

        }
      });
      await this.messageModel.findByIdAndUpdate(allmsg._id, allmsg);
    }
  }
  async findByids(id: string): Promise<number> {
    let somme = 0;
    const allmsg = await this.messageModel.findOne({ idU: id });
    if (allmsg.messages.length > 0) {
      await allmsg.messages.forEach((i) => {
        if (i.ids != 'admin' && i.vis == true) {
          somme = somme + 1;
        }
      });
    }
    return somme;
  }
  async update(id: string): Promise<any> {
    const allmsg = await this.messageModel.findOne({ idU: id });
    if (allmsg.messages.length > 0) {
      await allmsg.messages.forEach((i) => {
        if (i.ids != 'admin' && i.vis == true) {
          i.vis = false;
        }
      });
    }
    await this.messageModel.findByIdAndUpdate(allmsg._id, allmsg);
  }
}
