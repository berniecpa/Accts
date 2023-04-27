/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CustomerData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerDataUpdateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    CompanyName?: string;
    Email?: string;
    Phone?: string;
    Website?: string;
    BillingCountry?: string;
    BillingState?: string;
    BillingCity?: string;
    BillingAddress?: string;
    BillingPhone?: string;
    BillingZipCode?: string;
    untitledfield?: string;
};
export declare type CustomerDataUpdateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    CompanyName?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    Website?: ValidationFunction<string>;
    BillingCountry?: ValidationFunction<string>;
    BillingState?: ValidationFunction<string>;
    BillingCity?: ValidationFunction<string>;
    BillingAddress?: ValidationFunction<string>;
    BillingPhone?: ValidationFunction<string>;
    BillingZipCode?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerDataUpdateFormOverridesProps = {
    CustomerDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
    Website?: PrimitiveOverrideProps<TextFieldProps>;
    BillingCountry?: PrimitiveOverrideProps<TextFieldProps>;
    BillingState?: PrimitiveOverrideProps<TextFieldProps>;
    BillingCity?: PrimitiveOverrideProps<TextFieldProps>;
    BillingAddress?: PrimitiveOverrideProps<TextFieldProps>;
    BillingPhone?: PrimitiveOverrideProps<TextFieldProps>;
    BillingZipCode?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customerData?: CustomerData;
    onSubmit?: (fields: CustomerDataUpdateFormInputValues) => CustomerDataUpdateFormInputValues;
    onSuccess?: (fields: CustomerDataUpdateFormInputValues) => void;
    onError?: (fields: CustomerDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerDataUpdateFormInputValues) => CustomerDataUpdateFormInputValues;
    onValidate?: CustomerDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerDataUpdateForm(props: CustomerDataUpdateFormProps): React.ReactElement;
