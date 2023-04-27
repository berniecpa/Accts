import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCustomerData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly CompanyName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Website?: string | null;
  readonly BillingCountry?: string | null;
  readonly BillingState?: string | null;
  readonly BillingCity?: string | null;
  readonly BillingAddress?: string | null;
  readonly BillingPhone?: string | null;
  readonly BillingZipCode?: string | null;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomerData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomerData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName?: string | null;
  readonly LastName?: string | null;
  readonly CompanyName?: string | null;
  readonly Email?: string | null;
  readonly Phone?: string | null;
  readonly Website?: string | null;
  readonly BillingCountry?: string | null;
  readonly BillingState?: string | null;
  readonly BillingCity?: string | null;
  readonly BillingAddress?: string | null;
  readonly BillingPhone?: string | null;
  readonly BillingZipCode?: string | null;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CustomerData = LazyLoading extends LazyLoadingDisabled ? EagerCustomerData : LazyCustomerData

export declare const CustomerData: (new (init: ModelInit<CustomerData>) => CustomerData) & {
  copyOf(source: CustomerData, mutator: (draft: MutableModel<CustomerData>) => MutableModel<CustomerData> | void): CustomerData;
}