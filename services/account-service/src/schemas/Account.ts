import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export type AccountModel = Document & {
  user_name: string;
  password: string;
  user_email: string;
};

const AccountSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

AccountSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
  },
});

export default mongoose.model<AccountModel>('Account', AccountSchema);
