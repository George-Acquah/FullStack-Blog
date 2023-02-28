import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class ValidateObjectId implements PipeTransform<string> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async transform(value: string, _metadata: ArgumentMetadata) {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) {
      throw new BadRequestException(`Invalid ObjectId: ${value}`);
    }
    return value;
  }
}
