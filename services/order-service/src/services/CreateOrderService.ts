import Order from '@schemas/Order';
import mongoose from 'mongoose';

import UserData from './structures/UserData';
import CreateMailService from './CreateMailService';
import ResponseData from './structures/ResponseData';

class CreateOrderService {
  async run(user: UserData, products: Object): Promise<ResponseData> {
    const session = await mongoose.connection.startSession();
    session.startTransaction();

    try {
      const order = await Order.create({
        products: products,
        user_id: user.user_id,
        user_email: user.user_email,
      });

      const createMailService = new CreateMailService(products);

      await createMailService.run(user);

      await session.commitTransaction();

      if (order) {
        return {
          statusCode: 201,
          responseBody: order,
        };
      }

      return order;
    } catch (error) {
      await session.abortTransaction();
      return {
        statusCode: 422,
        responseBody: { message: 'Order could not be created' },
      };
    } finally {
      session.endSession();
    }
  }
}

export default CreateOrderService;
