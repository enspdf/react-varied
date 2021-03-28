const content = {
  title: "Become smarter in just 5 minutes",
  subTitle:
    "Get the daily email that makes reading the news actually enjoyable. Stay informed and entertained, for free.",
  input: {
    id: "email-input",
    type: "email",
    label: "Enter your email",
    placeholder: "Enter your email",
    variant: "outlined",
  },
  errors: {
    invalidEmail: "We require a valid email",
    empty: "Email is required please",
  },
  button: {
    states: {
      initial: "Submit",
      processing: "Sending request",
      success: "Sent successfully",
      failed: "Failed! Try again.",
    },
  },
};

export { content };
