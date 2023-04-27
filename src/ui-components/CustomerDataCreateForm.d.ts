/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerDataCreateFormInputValues = {
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
export declare type CustomerDataCreateFormValidationValues = {
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
export declare type CustomerDataCreateFormOverridesProps = {
    CustomerDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type CustomerDataCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerDataCreateFormInputValues) => CustomerDataCreateFormInputValues;
    onSuccess?: (fields: CustomerDataCreateFormInputValues) => void;
    onError?: (fields: CustomerDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerDataCreateFormInputValues) => CustomerDataCreateFormInputValues;
    onValidate?: CustomerDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerDataCreateForm(props: CustomerDataCreateFormProps): React.ReactElement;
