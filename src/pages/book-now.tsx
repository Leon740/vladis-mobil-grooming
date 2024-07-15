import React from 'react';

import { Main } from 'components/layouts/Main';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SectionHeader } from 'components/general/SectionHeader';
import { FormInput } from 'components/general/FormInput';
import { Button } from 'components/general/Button';
import { Fragment } from 'react/jsx-runtime';

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
}

interface FormInputI {
  as?: 'input' | 'textarea' | 'select';
  name: keyof ValuesI;
  label?: string;
  type: 'text' | 'email' | 'textarea';
  isRequired: boolean;
  placeholder?: string;
  options?: string[];
}

function BookNowPage() {
  const DATA = {
    icon: 'icon-sections_beforethesession',
    title: 'Request an appointment',
    paragraph: 'Have any questions or concerns? Feel free to [ask](/contact-us/).'
  };

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
      placeholder: 'leo.dob@gm.co'
    },
    {
      name: 'mobile',
      type: 'text',
      isRequired: false,
      placeholder: '2159877259'
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
      isRequired: true
    }
  ];

  return (
    <Main>
      <>
        <PlaybarSection />

        <div className="section-gap">
          <div className="container">
            <div className="section-inner-gap">
              <SectionHeader
                icon={DATA.icon}
                title={DATA.title.replace(
                  'appointment',
                  `<span class="text-sky-500">appointment</span>`
                )}
                paragraph={DATA.paragraph}
              />

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
                  zip: ''
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string()
                    .min(2, 'Name should be more than 1 character')
                    .max(20, 'Name should be less than 20 characters')
                    .required('Name is required'),
                  email: Yup.string().email('Invalid Email').required('Email is required'),
                  mobile: Yup.string().matches(/^\d{10}$/, 'Invalid Mobile'),
                  message: Yup.string()
                    .min(2, 'Message should be more than 1 character')
                    .max(500, 'Message should be less than 500 characters'),
                  contact: Yup.string().max(30),
                  street: Yup.string().max(30).required('Street is required'),
                  city: Yup.string().max(15).required('City is required'),
                  state: Yup.string().required('State is required'),
                  zip: Yup.string()
                    .matches(/^\d{5}$/, 'Invalid Zip')
                    .required('Zip is required')
                })}
                onSubmit={(values: ValuesI, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="section-inner-gap w-full xl:w-1/2">
                    <div className="flex flex-col gap-32 bg-white py-64 px-32 rounded-16">
                      {formFields.map(
                        ({
                          as,
                          name,
                          label,
                          type,
                          isRequired,
                          placeholder,
                          options
                        }: FormInputI) => (
                          <Fragment key={`input_${name}`}>
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
                            />
                            {name === 'street' && (
                              <p className="font-calistoga-regular text-32 mt-32">
                                Address where the <span className="text-sky-500">groom</span> will
                                take place...
                              </p>
                            )}
                          </Fragment>
                        )
                      )}
                    </div>
                    <Button
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
        </div>
      </>
    </Main>
  );
}

export default BookNowPage;
