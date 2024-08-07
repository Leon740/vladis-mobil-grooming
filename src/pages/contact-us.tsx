import React from 'react';

import { Main } from 'components/layouts/Main';
import { Wave } from 'components/general/Wave';
import { SectionHeader } from 'components/general/SectionHeader';
import { FormInput } from 'components/general/FormInput';
import { ButtonPaw } from 'components/general/Button';
import { PlaybarSection } from 'components/sections/PlaybarSection/PlaybarSection';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { navigate } from 'gatsby';

function ContactUsPage() {
  const DATA = {
    icon: 'icon-sections_contacts',
    title: 'Contact Us',
    paragraph: 'Have any questions or concerns? Feel free to ask.'
  };

  interface ValuesI {
    name: string;
    email: string;
    mobile: string;
    message: string;
  }

  interface FormInputI {
    as?: 'input' | 'textarea' | 'select' | 'mobile';
    name: keyof ValuesI;
    type: 'text' | 'email' | 'textarea';
    isRequired: boolean;
    placeholder?: string;
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
      isRequired: true,
      placeholder: 'Any questions or concerns? Share your thoughts with us.'
    }
  ];

  const handleSubmitFn = async (values: ValuesI, actions) => {
    const response = await fetch('https://formspree.io/f/mldrdawb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
    console.log(JSON.stringify(values));

    if (response.ok) {
      alert('Message sent!');
      actions.resetForm();
      navigate('/');
    } else {
      alert('Failed to send message.');
      actions.resetForm();
    }
  };

  return (
    <Main>
      <PlaybarSection />

      <Wave>
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
                mobile: Yup.string()
                  .matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid Mobile')
                  .required('Mobile is required'),
                message: Yup.string()
                  .min(2, 'Message should be more than 1 character')
                  .max(500, 'Message should be less than 500 characters')
                  .required('Message is required')
              })}
              onSubmit={(values: ValuesI, actions) => handleSubmitFn(values, actions)}
            >
              {({ errors, touched }) => (
                <Form className="section-inner-gap w-full xl:w-1/2">
                  <div className="flex flex-col gap-32 bg-white py-64 px-32 rounded-16">
                    {formFields.map(
                      ({ as, name, type, isRequired, placeholder, mask }: FormInputI) => (
                        <FormInput
                          key={`input_${name}`}
                          as={as}
                          name={name}
                          type={type}
                          isRequired={isRequired}
                          placeholder={placeholder}
                          error={errors[name]}
                          touched={touched[name]}
                          mask={mask}
                        />
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

export default ContactUsPage;
