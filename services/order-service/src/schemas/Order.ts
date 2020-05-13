import mongoose, { Document, Schema } from 'mongoose';

export type OrderModel = Document & {
  _id: string;
  products: Object;
  user_id: string;
  user_email: string;
};

const OrderSchema = new Schema(
  {
    products: {
      type: Object,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    user_email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<OrderModel>('Order', OrderSchema);
