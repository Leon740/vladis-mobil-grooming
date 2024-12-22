import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { SectionHeader } from 'components/general/SectionHeader';
import { FormInput } from 'components/general/FormInput';
import { ButtonPaw } from 'components/general/Button';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';

import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { navigate } from 'gatsby';
import 'react-datepicker/dist/react-datepicker.css';

function BookNowPage() {
  const DATA = {
    icon: 'icon-sections_beforethesession',
    title: 'Request an <b>appointment</b>',
    paragraph: 'Have any questions or concerns? Feel free to [ask](/contacts/).'
  };

  interface ValuesI {
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

  interface FormInputI {
    as?: 'input' | 'textarea' | 'select' | 'mobile' | 'date';
    name: keyof ValuesI;
    label?: string;
    type: 'text' | 'email' | 'textarea';
    isRequired: boolean;
    placeholder?: string;
    options?: string[];
    mask?: string;
  }

  const formFields: FormInputI[] = [
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
      placeholder: '267-977-1310',
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
      placeholder: '01/01/2024'
    }
  ];

  const handleSubmitFn = async (values: ValuesI, actions: FormikHelpers<ValuesI>) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('form-name', 'appointment-test');

      const response = await fetch('/', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Message sent!');
        actions.resetForm();
        navigate('/');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <Main>
      <PlaybarSection />

      <Wave>
        <div className="container">
          <div className="section-inner-gap">
            <SectionHeader icon={DATA.icon} title={DATA.title} paragraph={DATA.paragraph} />

            <form name="appointment-test" method="POST" data-netlify="true" className="hidden">
              <input type="hidden" name="form-name" value="appointment-test" className="hidden" />
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="mobile" />
              <textarea name="message" />
              <input type="text" name="contact" />
              <input type="text" name="street" />
              <input type="text" name="city" />
              <input type="text" name="state" />
              <input type="text" name="zip" />
              <input type="text" name="date" />
              <button type="submit">submit</button>
            </form>

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
              onSubmit={(values: ValuesI, actions) => handleSubmitFn(values, actions)}
            >
              {({ errors, touched }) => (
                <Form
                  name="appointment-test"
                  method="POST"
                  data-netlify="true"
                  className="section-inner-gap w-full xl:w-1/2"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="appointment-test"
                    className="hidden"
                  />

                  <div className="flex flex-col gap-32 bg-white py-64 px-32 rounded-16">
                    {formFields.map(
                      ({
                        as,
                        name,
                        label,
                        type,
                        isRequired,
                        placeholder,
                        options,
                        mask
                      }: FormInputI) => (
                        <div key={`input_${name}`}>
                          <FormInput
                            key={`input_${name}`}
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
                            <p className="font-calistoga-regular text-32 mt-32">
                              Address where the <span className="text-sky-500">groom</span> will
                              take place...
                            </p>
                          )}
                        </div>
                      )
                    )}
                  </div>
                  <ButtonPaw
                    type="Primary_Blue"
                    aType="submit"
                    label="Send my Message"
                    icon="icon-general_arrow"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Wave>
    </Main>
  );
}

export default BookNowPage;
