// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "PREPARING": "PREPARING",
  "READY_FOR_SERVING": "READY_FOR_SERVING",
  "SERVED": "SERVED",
  "COMPLETED": "COMPLETED"
};

const { OrderDrink, Drink, Order, Club, Bucket, BucketDrink, User } = initSchema(schema);

export {
  OrderDrink,
  Drink,
  Order,
  Club,
  Bucket,
  BucketDrink,
  User,
  OrderStatus
};