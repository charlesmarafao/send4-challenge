import ProductRoutes from './routes/ProductServiceRoutes';
import OrderRoutes from './routes/OrderServiceRoutes';
import AuthRoutes from './routes/AuthServiceRoutes';
import UserAccountRoutes from './routes/UserAccountServiceRoutes';
import { Router } from 'express';

const routes = Router();

routes.use([ProductRoutes, OrderRoutes, AuthRoutes, UserAccountRoutes]);

export default routes;
