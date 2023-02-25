import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Club = LazyLoading extends LazyLoadingDisabled ? EagerClub : LazyClub

export declare const Club: (new (init: ModelInit<Club>) => Club) & {
  copyOf(source: Club, mutator: (draft: MutableModel<Club>) => MutableModel<Club> | void): Club;
}