import {
  EMAIL_INPUT_REGEX,
  PWD_INPUT_RGX,
  USER_NAME_INPUT_RGX,
} from "@/constants/regex";

export async function validateWithRegex(
  validationType: "name" | "password" | "email" | "username",
  value: string
) {
  const response = {
    error: false,
    message: "",
    explanation: ""
  };
  let validation;
  switch (validationType) {
    case "name":
    case "username":
      validation = USER_NAME_INPUT_RGX.test(value);      
      response.error = !validation;
      response.message = validation ? "" : "Invalid input";
      response.explanation = validation ? "" : "Must start with a letter and can only contain letters, numbers, and underscores. Length should be between 3 and 20 characters."
      return response;

    case "email":
      validation = EMAIL_INPUT_REGEX.test(value);
      response.error = !validation;
      response.message = validation ? "" : "invalid email";
      response.explanation = validation ? "" : "Email is not in the valid format."
      return response;

    case "password":
      validation = PWD_INPUT_RGX.test(value);
      response.error = !validation;
      response.message = validation ? "" : "password is weak";
      response.explanation = validation ? "" : "Password should have atleast one lower and upper case letter, one digit and any of the special character (! @ # $ %). Length should be between 8 and 20 character "
      return response;

    default:
      response.error = true;
      response.message = "Validation type is not a valid one";
      return response;
  }
}
