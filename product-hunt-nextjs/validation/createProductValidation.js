export default function createProductValidation(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.company) {
    errors.company = "Company is required";
  }

  if (!values.url) {
    errors.url = "Product URL is required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "Invalid URL";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  console.log(errors)

  return errors;
}
