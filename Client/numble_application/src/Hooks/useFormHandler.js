import { useState, useEffect, useCallback } from "react";

const useFormHandler = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState({});
  const [isPhoneValid, setPhoneValid] = useState(false);
  const [isPostcodeValid, setPostcodeValid] = useState(false);
  const [isHouseNumberValid, setHouseNumberValid] = useState(false);
  const [isCityValid, setCityValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const validatePhone = (value) => {
    const onlyNumbers = /^[0-9]*$/;
    setFormState((prev) => ({ ...prev, phone: value }));
    setPhoneValid(onlyNumbers.test(value) && value.length === 10);
  };

  const validateHouseNumber = (value) => {
    const onlyNumbers = /^[0-9]*$/;
    setFormState((prev) => ({ ...prev, number: value }));
    setHouseNumberValid(onlyNumbers.test(value) && value.length >= 1);
  };

  const validateBus = (value) => {
    const onlyLetters = /^[A-Z]*$/;
    if (onlyLetters.test(value)) {
      setFormState((prev) => ({ ...prev, bus: value }));
    }
  };

  const validatePostcode = (value) => {
    const onlyNumbers = /^[0-9]*$/;
    setFormState((prev) => ({ ...prev, postcode: value }));
    setPostcodeValid(onlyNumbers.test(value) && value.length === 4);
  };

  const validateCity = (value) => {
    const onlyLetters = /^[A-Za-z]*$/;
    setFormState((prev) => ({ ...prev, city: value }));
    setCityValid(onlyLetters.test(value) && value.length > 0);
  };

  const formatPlate = (value) => {
    const upperCaseValue = value.toUpperCase();

    if (upperCaseValue.length === 0) {
      return "";
    }

    if (/^\d/.test(upperCaseValue)) {
      if (upperCaseValue.length === 1) {
        return upperCaseValue.length === 1
          ? upperCaseValue + "-"
          : upperCaseValue;
      } else if (upperCaseValue.length > 1 && upperCaseValue.length === 5) {
        return upperCaseValue.length === 5
          ? upperCaseValue + "-"
          : upperCaseValue;
      }
    } else {
      if (upperCaseValue.length === 3) {
        return upperCaseValue + "-";
      }
    }
    if (upperCaseValue.endsWith("-")) {
      return upperCaseValue.slice(0, -1);
    }
    return upperCaseValue;
  };

  const handleChange = (e, fieldName) => {
    const { value } = e.target;

    switch (fieldName) {
      case "firstName":
      case "lastName":
      case "email":
      case "street":
        setFormState((prev) => ({ ...prev, [fieldName]: value }));
        setError((prev) => ({ ...prev, [fieldName]: !value }));
        break;

      case "city":
        const cityValue = value.replace(/[^A-Za-z]/g, "");
        validateCity(cityValue);
        setError((prev) => ({ ...prev, city: !value }));
        break;

      case "numberPlate":
        const formattedPlate = formatPlate(value);
        setFormState((prev) => ({ ...prev, numberPlate: formattedPlate }));
        setError((prev) => ({ ...prev, numberPlate: !formattedPlate }));
        break;

      case "number":
        const houseNumberValue = value.replace(/[^0-9]/g, "");
        validateHouseNumber(houseNumberValue);
        setError((prev) => ({ ...prev, number: !houseNumberValue }));
        break;

      case "bus":
        validateBus(value);
        break;

      case "postcode":
        const postcodeValue = value.replace(/[^0-9]/g, "");
        validatePostcode(postcodeValue);
        setError((prev) => ({ ...prev, postcode: !postcodeValue }));
        break;

      case "phone":
        const phoneValue = value.replace(/[^0-9]/g, "");
        validatePhone(phoneValue);
        setError((prev) => ({ ...prev, phone: !phoneValue }));
        break;

      default:
        break;
    }

    checkFormValidity();
  };
  const checkFormValidity = useCallback(() => {
    const isValid =
      formState.firstName &&
      formState.lastName &&
      formState.numberPlate &&
      formState.email &&
      formState.street &&
      isHouseNumberValid &&
      isCityValid &&
      isPostcodeValid &&
      isPhoneValid;

    setFormValid(isValid);
  }, [
    formState.firstName,
    formState.lastName,
    formState.numberPlate,
    formState.email,
    formState.street,
    isCityValid,
    isHouseNumberValid,
    isPostcodeValid,
    isPhoneValid,
  ]);

  useEffect(() => {
    checkFormValidity();
  }, [
    formState,
    isPhoneValid,
    isPostcodeValid,
    isHouseNumberValid,
    checkFormValidity,
  ]);

  return { formState, error, handleChange, formValid, setError, setFormState };
};

export default useFormHandler;
