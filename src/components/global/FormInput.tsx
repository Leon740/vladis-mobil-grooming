import { type ReactNode } from 'react';

import { Field, type FieldProps } from 'formik';
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';

interface FormInputPropsI {
  as: 'input' | 'textarea' | 'select' | 'mobile' | 'date' | undefined;
  name: string;
  label?: string;
  type: 'text' | 'email' | 'textarea';
  isRequired: boolean;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  options?: string[];
  mask?: string;
}

export function FormInput({
  as = 'input',
  name,
  label,
  type,
  isRequired,
  placeholder,
  error,
  touched,
  options,
  mask
}: FormInputPropsI) {
  const className = `text-ss3-20-regular outline-0 w-full bg-gray-100 py-8 px-16 border-2 border-gray-200 focus:border-sky-500 rounded-8 ${
    type === 'textarea' ? 'resize-y h-128 max-h-256' : ''
  }`;

  let Component: ReactNode;

  switch (as) {
    case 'select':
      Component = (
        <Field
          as={'select'}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={`${name} input`}
          className={className}
        >
          {options!.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
      );
      break;
    case 'mobile':
      Component = (
        <Field name={name}>
          {({ field }: FieldProps) => (
            <InputMask
              {...field}
              id={name}
              mask={mask!}
              placeholder={placeholder}
              aria-label={`${name} input`}
              className={className}
            />
          )}
        </Field>
      );
      break;
    case 'date':
      Component = (
        <Field name={name}>
          {({ field, form }: FieldProps) => (
            <DatePicker
              {...field}
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) => form.setFieldValue(name, date)}
              placeholderText={placeholder}
              className={className}
              showTimeSelect
              timeIntervals={60} // Allows selection every hour
              timeFormat="hh:mm aa" // Use 'hh:mm aa' for AM/PM format
              dateFormat="MMMM d, yyyy, h:mm aa"
              filterTime={(time) => {
                const hours = time.getHours();
                return hours >= 8 && hours <= 20; // Allows time from 8 AM to 8 PM
              }}
            />
          )}
        </Field>
      );
      break;
    default:
      Component = (
        <Field
          as={as}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={`${name} input`}
          className={className}
        />
      );
      break;
  }

  return (
    <div className="flex flex-col gap-16">
      <label htmlFor={name} className="text-ss3-20-bold max-w-max">
        {label || `${name[0].toUpperCase()}${name.slice(1)}`}
        {isRequired && <sup className="text-red-500">&nbsp;*</sup>}
      </label>

      {Component}

      {error && touched && <p className="text-red-500">{error}</p>}
    </div>
  );
}
