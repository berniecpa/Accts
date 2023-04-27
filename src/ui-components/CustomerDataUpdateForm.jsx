/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CustomerData } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CustomerDataUpdateForm(props) {
  const {
    id: idProp,
    customerData: customerDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    FirstName: "",
    LastName: "",
    CompanyName: "",
    Email: "",
    Phone: "",
    Website: "",
    BillingCountry: "",
    BillingState: "",
    BillingCity: "",
    BillingAddress: "",
    BillingPhone: "",
    BillingZipCode: "",
    untitledfield: "",
  };
  const [FirstName, setFirstName] = React.useState(initialValues.FirstName);
  const [LastName, setLastName] = React.useState(initialValues.LastName);
  const [CompanyName, setCompanyName] = React.useState(
    initialValues.CompanyName
  );
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [Website, setWebsite] = React.useState(initialValues.Website);
  const [BillingCountry, setBillingCountry] = React.useState(
    initialValues.BillingCountry
  );
  const [BillingState, setBillingState] = React.useState(
    initialValues.BillingState
  );
  const [BillingCity, setBillingCity] = React.useState(
    initialValues.BillingCity
  );
  const [BillingAddress, setBillingAddress] = React.useState(
    initialValues.BillingAddress
  );
  const [BillingPhone, setBillingPhone] = React.useState(
    initialValues.BillingPhone
  );
  const [BillingZipCode, setBillingZipCode] = React.useState(
    initialValues.BillingZipCode
  );
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerDataRecord
      ? { ...initialValues, ...customerDataRecord }
      : initialValues;
    setFirstName(cleanValues.FirstName);
    setLastName(cleanValues.LastName);
    setCompanyName(cleanValues.CompanyName);
    setEmail(cleanValues.Email);
    setPhone(cleanValues.Phone);
    setWebsite(cleanValues.Website);
    setBillingCountry(cleanValues.BillingCountry);
    setBillingState(cleanValues.BillingState);
    setBillingCity(cleanValues.BillingCity);
    setBillingAddress(cleanValues.BillingAddress);
    setBillingPhone(cleanValues.BillingPhone);
    setBillingZipCode(cleanValues.BillingZipCode);
    setUntitledfield(cleanValues.untitledfield);
    setErrors({});
  };
  const [customerDataRecord, setCustomerDataRecord] = React.useState(
    customerDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CustomerData, idProp)
        : customerDataModelProp;
      setCustomerDataRecord(record);
    };
    queryData();
  }, [idProp, customerDataModelProp]);
  React.useEffect(resetStateValues, [customerDataRecord]);
  const validations = {
    FirstName: [],
    LastName: [],
    CompanyName: [],
    Email: [{ type: "Email" }],
    Phone: [{ type: "Phone" }],
    Website: [{ type: "URL" }],
    BillingCountry: [],
    BillingState: [],
    BillingCity: [],
    BillingAddress: [],
    BillingPhone: [{ type: "Phone" }],
    BillingZipCode: [],
    untitledfield: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          FirstName,
          LastName,
          CompanyName,
          Email,
          Phone,
          Website,
          BillingCountry,
          BillingState,
          BillingCity,
          BillingAddress,
          BillingPhone,
          BillingZipCode,
          untitledfield,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            CustomerData.copyOf(customerDataRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={FirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName: value,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.FirstName ?? value;
          }
          if (errors.FirstName?.hasError) {
            runValidationTasks("FirstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("FirstName", FirstName)}
        errorMessage={errors.FirstName?.errorMessage}
        hasError={errors.FirstName?.hasError}
        {...getOverrideProps(overrides, "FirstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={LastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName: value,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.LastName ?? value;
          }
          if (errors.LastName?.hasError) {
            runValidationTasks("LastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("LastName", LastName)}
        errorMessage={errors.LastName?.errorMessage}
        hasError={errors.LastName?.hasError}
        {...getOverrideProps(overrides, "LastName")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={CompanyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName: value,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.CompanyName ?? value;
          }
          if (errors.CompanyName?.hasError) {
            runValidationTasks("CompanyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("CompanyName", CompanyName)}
        errorMessage={errors.CompanyName?.errorMessage}
        hasError={errors.CompanyName?.hasError}
        {...getOverrideProps(overrides, "CompanyName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email: value,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone: value,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.Phone ?? value;
          }
          if (errors.Phone?.hasError) {
            runValidationTasks("Phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("Phone", Phone)}
        errorMessage={errors.Phone?.errorMessage}
        hasError={errors.Phone?.hasError}
        {...getOverrideProps(overrides, "Phone")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={Website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website: value,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.Website ?? value;
          }
          if (errors.Website?.hasError) {
            runValidationTasks("Website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("Website", Website)}
        errorMessage={errors.Website?.errorMessage}
        hasError={errors.Website?.hasError}
        {...getOverrideProps(overrides, "Website")}
      ></TextField>
      <TextField
        label="Billing country"
        isRequired={false}
        isReadOnly={false}
        value={BillingCountry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry: value,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.BillingCountry ?? value;
          }
          if (errors.BillingCountry?.hasError) {
            runValidationTasks("BillingCountry", value);
          }
          setBillingCountry(value);
        }}
        onBlur={() => runValidationTasks("BillingCountry", BillingCountry)}
        errorMessage={errors.BillingCountry?.errorMessage}
        hasError={errors.BillingCountry?.hasError}
        {...getOverrideProps(overrides, "BillingCountry")}
      ></TextField>
      <TextField
        label="Billing state"
        isRequired={false}
        isReadOnly={false}
        value={BillingState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState: value,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.BillingState ?? value;
          }
          if (errors.BillingState?.hasError) {
            runValidationTasks("BillingState", value);
          }
          setBillingState(value);
        }}
        onBlur={() => runValidationTasks("BillingState", BillingState)}
        errorMessage={errors.BillingState?.errorMessage}
        hasError={errors.BillingState?.hasError}
        {...getOverrideProps(overrides, "BillingState")}
      ></TextField>
      <TextField
        label="Billing city"
        isRequired={false}
        isReadOnly={false}
        value={BillingCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity: value,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.BillingCity ?? value;
          }
          if (errors.BillingCity?.hasError) {
            runValidationTasks("BillingCity", value);
          }
          setBillingCity(value);
        }}
        onBlur={() => runValidationTasks("BillingCity", BillingCity)}
        errorMessage={errors.BillingCity?.errorMessage}
        hasError={errors.BillingCity?.hasError}
        {...getOverrideProps(overrides, "BillingCity")}
      ></TextField>
      <TextField
        label="Billing address"
        isRequired={false}
        isReadOnly={false}
        value={BillingAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress: value,
              BillingPhone,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.BillingAddress ?? value;
          }
          if (errors.BillingAddress?.hasError) {
            runValidationTasks("BillingAddress", value);
          }
          setBillingAddress(value);
        }}
        onBlur={() => runValidationTasks("BillingAddress", BillingAddress)}
        errorMessage={errors.BillingAddress?.errorMessage}
        hasError={errors.BillingAddress?.hasError}
        {...getOverrideProps(overrides, "BillingAddress")}
      ></TextField>
      <TextField
        label="Billing phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={BillingPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone: value,
              BillingZipCode,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.BillingPhone ?? value;
          }
          if (errors.BillingPhone?.hasError) {
            runValidationTasks("BillingPhone", value);
          }
          setBillingPhone(value);
        }}
        onBlur={() => runValidationTasks("BillingPhone", BillingPhone)}
        errorMessage={errors.BillingPhone?.errorMessage}
        hasError={errors.BillingPhone?.hasError}
        {...getOverrideProps(overrides, "BillingPhone")}
      ></TextField>
      <TextField
        label="Billing zip code"
        isRequired={false}
        isReadOnly={false}
        value={BillingZipCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode: value,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.BillingZipCode ?? value;
          }
          if (errors.BillingZipCode?.hasError) {
            runValidationTasks("BillingZipCode", value);
          }
          setBillingZipCode(value);
        }}
        onBlur={() => runValidationTasks("BillingZipCode", BillingZipCode)}
        errorMessage={errors.BillingZipCode?.errorMessage}
        hasError={errors.BillingZipCode?.hasError}
        {...getOverrideProps(overrides, "BillingZipCode")}
      ></TextField>
      <TextField
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              FirstName,
              LastName,
              CompanyName,
              Email,
              Phone,
              Website,
              BillingCountry,
              BillingState,
              BillingCity,
              BillingAddress,
              BillingPhone,
              BillingZipCode,
              untitledfield: value,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || customerDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || customerDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
