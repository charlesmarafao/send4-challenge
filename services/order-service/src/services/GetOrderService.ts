import Order from '@schemas/Order';
import mongoose from 'mongoose';
import ResponseData from './structures/ResponseData';

class GetOrderService {
  async run(id: string): Promise<ResponseData> {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const order = await Order.findById(id);
      if (order) {
        return {
          statusCode: 200,
          responseBody: order,
        };
      }
    }

    return {
      statusCode: 404,
      responseBody: { message: 'Order not found' },
    };
  }
}

export default GetOrderService;
