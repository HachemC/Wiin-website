import React from 'react';

function RegistrationValidation(email, name, contact, pass) {
  const errors = [];

  if (!email) {
    errors.push("Email is required.");
  }

  if (!name) {
    errors.push("Name is required.");
  }

  if (!contact) {
    errors.push("Contact number is required.");
  }

  if (!pass) {
    errors.push("Password is required.");
  }

  // Add more specific validations as needed

  return errors;
}

export default RegistrationValidation;