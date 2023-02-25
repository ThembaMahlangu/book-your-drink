import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum OrderStatus {
  NEW = "NEW",
  PREPARING = "PREPARING",
  READY_FOR_SERVING = "READY_FOR_SERVING",
  SERVED = "SERVED",
  COMPLETED = "COMPLETED"
}



type EagerOrderDrink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDrink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantit: number;
  readonly Drink?: Drink | null;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDrinkDrinkId?: string | null;
}

type LazyOrderDrink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderDrink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantit: number;
  readonly Drink: AsyncItem<Drink | undefined>;
  readonly orderID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderDrinkDrinkId?: string | null;
}

export declare type OrderDrink = LazyLoading extends LazyLoadingDisabled ? EagerOrderDrink : LazyOrderDrink

export declare const OrderDrink: (new (init: ModelInit<OrderDrink>) => OrderDrink) & {
  copyOf(source: OrderDrink, mutator: (draft: MutableModel<OrderDrink>) => MutableModel<OrderDrink> | void): OrderDrink;
}

type EagerDrink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Drink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly clubID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDrink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Drink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly clubID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Drink = LazyLoading extends LazyLoadingDisabled ? EagerDrink : LazyDrink

export declare const Drink: (new (init: ModelInit<Drink>) => Drink) & {
  copyOf(source: Drink, mutator: (draft: MutableModel<Drink>) => MutableModel<Drink> | void): Drink;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Club?: Club | null;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderDrinks?: (OrderDrink | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderClubId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Club: AsyncItem<Club | undefined>;
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly OrderDrinks: AsyncCollection<OrderDrink>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderClubId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Club, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly operatingDays: string;
  readonly operatingTime: string;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Drinks?: Drink[] | null;
  readonly Buckets?: (Bucket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClub = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Club, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly operatingDays: string;
  readonly operatingTime: string;
  readonly rating?: number | null;
  readonly address: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly Drinks: AsyncCollection<Drink>;
  readonly Buckets: AsyncCollection<Bucket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Club = LazyLoading extends LazyLoadingDisabled ? EagerClub : LazyClub

export declare const Club: (new (init: ModelInit<Club>) => Club) & {
  copyOf(source: Club, mutator: (draft: MutableModel<Club>) => MutableModel<Club> | void): Club;
}

type EagerBucket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bucket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BucketDrinks?: (BucketDrink | null)[] | null;
  readonly userID: string;
  readonly clubID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBucket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bucket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BucketDrinks: AsyncCollection<BucketDrink>;
  readonly userID: string;
  readonly clubID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bucket = LazyLoading extends LazyLoadingDisabled ? EagerBucket : LazyBucket

export declare const Bucket: (new (init: ModelInit<Bucket>) => Bucket) & {
  copyOf(source: Bucket, mutator: (draft: MutableModel<Bucket>) => MutableModel<Bucket> | void): Bucket;
}

type EagerBucketDrink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BucketDrink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Drink?: Drink | null;
  readonly bucketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bucketDrinkDrinkId?: string | null;
}

type LazyBucketDrink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BucketDrink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly Drink: AsyncItem<Drink | undefined>;
  readonly bucketID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly bucketDrinkDrinkId?: string | null;
}

export declare type BucketDrink = LazyLoading extends LazyLoadingDisabled ? EagerBucketDrink : LazyBucketDrink

export declare const BucketDrink: (new (init: ModelInit<BucketDrink>) => BucketDrink) & {
  copyOf(source: BucketDrink, mutator: (draft: MutableModel<BucketDrink>) => MutableModel<BucketDrink> | void): BucketDrink;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Order | null)[] | null;
  readonly Buckets?: (Bucket | null)[] | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders: AsyncCollection<Order>;
  readonly Buckets: AsyncCollection<Bucket>;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}