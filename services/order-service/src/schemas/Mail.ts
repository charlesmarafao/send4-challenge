import mongoose, { Document, Schema } from 'mongoose';

export type MailModel = Document & {
  subject: string;
  body: string;
  recipient: string;
  completedAt: Date;
};

const MailSchema = new Schema(
  {
    subject: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<MailModel>('Mail', MailSchema);
