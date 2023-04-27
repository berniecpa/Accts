// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CustomerData } = initSchema(schema);

export {
  CustomerData
};