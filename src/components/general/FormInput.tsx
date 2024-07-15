import React from 'react';

import { Field } from 'formik';

interface FormInputPropsI {
  as: 'input' | 'textarea' | 'select' | undefined;
  name: string;
  label?: string;
  type: 'text' | 'email' | 'textarea';
  isRequired: boolean;
  placeholder?: string;
  className?: string;
  error?: string;
  touched?: boolean;
  options?: string[];
}

export function FormInput({
  as = 'input',
  name,
  label,
  type,
  isRequired,
  placeholder,
  className = '',
  error,
  touched,
  options
}: FormInputPropsI) {
  return (
    <div className={`flex flex-col gap-16 ${className}`}>
      <label htmlFor={name} className="text-ss3-20-bold max-w-max">
        {label || `${name[0].toUpperCase()}${name.slice(1)}`}
        {isRequired && <sup className="text-red-500"> *</sup>}
      </label>

      {as === 'select' && options ? (
        <Field
          as={as}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={`${name} input`}
          className={`bg-gray-100 py-8 px-16 text-ss3-20-regular border-2 border-solid border-gray-200 focus:border-sky-500 rounded-8 ${
            type === 'textarea' ? 'h-128 resize-y' : ''
          }`}
        >
          {options.map((option, optionIndex) => (
            <option key={`option_${optionIndex}_${option}`} value={option}>
              {option}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          as={as}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={`${name} input`}
          className={`bg-gray-100 py-8 px-16 text-ss3-20-regular border-2 border-solid border-gray-200 focus:border-sky-500 rounded-8 ${
            type === 'textarea' ? 'h-128 resize-y' : ''
          }`}
        />
      )}

      {error && touched && <p className="text-red-500">{error}</p>}
    </div>
  );
}
