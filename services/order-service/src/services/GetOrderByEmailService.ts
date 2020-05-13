import Order from '@schemas/Order';
import ResponseData from './structures/ResponseData';

class GetOrderByEmailService {
  async run(email: string): Promise<ResponseData> {
    const order = await Order.find({
      user_email: email,
    });

    if (order && order.length) {
      return {
        statusCode: 200,
        responseBody: order,
      };
    }

    return {
      statusCode: 404,
      responseBody: { message: 'Order(s) not found' },
    };
  }
}

export default GetOrderByEmailService;
