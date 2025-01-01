import { Formik, Form, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '@components/global/FormInput';
import 'react-datepicker/dist/react-datepicker.css';
import '@css/datepicker.css';
import { Button } from '@components/global/Button';

export function AppointmentForm() {
  interface IValues {
    name: string;
    email: string;
    mobile: string;
    message: string;
    contact: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    date: string;
  }

  interface IInput {
    as?: 'input' | 'textarea' | 'select' | 'mobile' | 'date';
    name: keyof IValues;
    label?: string;
    type: 'text' | 'email' | 'textarea';
    isRequired: boolean;
    placeholder?: string;
    options?: string[];
    mask?: string;
  }

  const INPUTS: IInput[] = [
    {
      name: 'name',
      type: 'text',
      isRequired: true,
      placeholder: 'Leo'
    },
    {
      name: 'email',
      type: 'email',
      isRequired: true,
      placeholder: 'leo@gmail.com'
    },
    {
      as: 'mobile',
      name: 'mobile',
      type: 'text',
      isRequired: true,
      placeholder: '267-471-3580',
      mask: '999-999-9999'
    },
    {
      as: 'textarea',
      name: 'message',
      type: 'textarea',
      isRequired: false,
      placeholder: 'Any questions or concerns? Share your thoughts with us.'
    },
    {
      name: 'contact',
      label: 'How did you hear about us?',
      type: 'text',
      isRequired: false
    },
    {
      name: 'street',
      type: 'text',
      isRequired: true,
      placeholder: '11811 Double Trouble Rd'
    },
    {
      name: 'city',
      type: 'text',
      isRequired: true,
      placeholder: 'Philadelphia'
    },
    {
      as: 'select',
      name: 'state',
      type: 'text',
      isRequired: true,
      options: ['PA', 'NJ', 'DE', 'NY']
    },
    {
      name: 'zip',
      type: 'text',
      isRequired: true,
      placeholder: '19116'
    },
    {
      as: 'date',
      name: 'date',
      type: 'text',
      isRequired: true,
      placeholder: '01/01/2025'
    }
  ];

  const handleSubmit = async (values: IValues, actions: FormikHelpers<IValues>) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('form-name', 'appointment');

      const response = await fetch('/', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Message sent!');
        actions.resetForm();
        window.location.href = '/';
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Form submission error:', error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        mobile: '',
        message: '',
        contact: '',
        street: '',
        city: 'Philadelphia',
        state: 'PA',
        zip: '',
        date: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(2, 'Name should be more than 1 character')
          .max(20, 'Name should be less than 20 characters')
          .required('Name is required'),
        email: Yup.string().email('Invalid Email').required('Email is required'),
        mobile: Yup.string()
          .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid Mobile')
          .required('Mobile is required'),
        message: Yup.string()
          .min(2, 'Message should be more than 1 character')
          .max(500, 'Message should be less than 500 characters'),
        contact: Yup.string().max(30),
        street: Yup.string().max(30).required('Street is required'),
        city: Yup.string().max(15).required('City is required'),
        state: Yup.string().required('State is required'),
        zip: Yup.string()
          .matches(/^\d{5}$/, 'Invalid Zip')
          .required('Zip is required'),
        date: Yup.string().required('Date is required')
      })}
      onSubmit={(values: IValues, actions) => handleSubmit(values, actions)}
    >
      {({ errors, touched }) => (
        <Form
          name="appointment"
          method="POST"
          data-netlify="true"
          className="w-full xl:w-1/2 flex flex-col gap-64"
        >
          <input type="hidden" name="form-name" value="appointment" className="hidden" />

          <div className="flex flex-col gap-32 py-64 px-32 rounded-16 bg-white">
            {INPUTS.map(
              ({ as, name, label, type, isRequired, placeholder, options, mask }: IInput) => (
                <div key={`AppointmentForm_FormInput_${name}`}>
                  <FormInput
                    key={`AppointmentForm_FormInput_Inner_${name}`}
                    as={as}
                    name={name}
                    label={label}
                    type={type}
                    isRequired={isRequired}
                    placeholder={placeholder}
                    error={errors[name]}
                    touched={touched[name]}
                    options={options}
                    mask={mask}
                  />
                  {name === 'contact' && (
                    <h2 className="font-calistoga-regular text-32 mt-32">Address</h2>
                  )}
                </div>
              )
            )}
          </div>

          <Button
            buttonType="submit"
            style="Primary_Blue"
            label="Send my Message"
            icon="global_arrow"
          />
        </Form>
      )}
    </Formik>
  );
}
