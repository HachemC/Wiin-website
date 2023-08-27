import React from 'react';

function Validation(email, pass) {
  const errors = [];

  if (!email) {
    errors.push("Email is required.");
  }

  if (!pass) {
    errors.push("Password is required.");
  }

  return errors;
}

export default Validation;

