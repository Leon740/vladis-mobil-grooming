import React from 'react';

import { Main } from 'components/layouts/Main';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SectionHeader } from 'components/general/SectionHeader';
import { FormInput } from 'components/general/FormInput';
import { Button } from 'components/general/Button';

interface ValuesI {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormInputI {
  as?: 'input' | 'textarea' | 'select';
  name: keyof ValuesI;
  type: 'text' | 'email' | 'textarea';
  isRequired: boolean;
  placeholder?: string;
}

function ContactUsPage() {
  const DATA = {
    icon: 'icon-sections_contacts',
    title: 'Contact Us',
    paragraph: 'Have any questions or concerns? Feel free to ask.'
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
      isRequired: true,
      placeholder: 'Any questions or concerns? Share your thoughts with us.'
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
                title={DATA.title.replace('Contact', `<span class="text-sky-500">Contact</span>`)}
                paragraph={DATA.paragraph}
              />

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  mobile: '',
                  message: ''
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
                    .max(500, 'Message should be less than 500 characters')
                    .required('Message is required')
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
                      {formFields.map(({ as, name, type, isRequired, placeholder }: FormInputI) => (
                        <FormInput
                          key={`input_${name}`}
                          as={as}
                          name={name}
                          type={type}
                          isRequired={isRequired}
                          placeholder={placeholder}
                          error={errors[name]}
                          touched={touched[name]}
                        />
                      ))}
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

export default ContactUsPage;
