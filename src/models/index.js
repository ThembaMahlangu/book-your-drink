// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Drink, Club } = initSchema(schema);

export {
  Drink,
  Club
};