import { Formik, Form, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FormInput } from '@components/global/FormInput';
import { Button } from '@components/global/Button';

export function ContactsForm() {
  interface IValues {
    name: string;
    email: string;
    mobile: string;
    message: string;
  }

  interface IInput {
    as?: 'input' | 'textarea' | 'select' | 'mobile';
    name: keyof IValues;
    type: 'text' | 'email' | 'textarea';
    isRequired: boolean;
    placeholder: string;
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
      isRequired: true,
      placeholder: 'Any questions or concerns? Share your thoughts with us.'
    }
  ];

  const handleSubmit = async (values: IValues, actions: FormikHelpers<IValues>) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('form-name', 'contact');

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
      onSubmit={(values: IValues, actions) => handleSubmit(values, actions)}
    >
      {({ errors, touched }) => (
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          className="w-full xl:w-1/2 flex flex-col gap-64"
        >
          <input type="hidden" name="form-name" value="contact" className="hidden" />

          <div className="flex flex-col gap-32 py-64 px-32 rounded-16 bg-white">
            {INPUTS.map(({ as, name, type, isRequired, placeholder, mask }: IInput) => (
              <FormInput
                key={name}
                as={as}
                name={name}
                type={type}
                isRequired={isRequired}
                placeholder={placeholder}
                error={errors[name]}
                touched={touched[name]}
                mask={mask}
              />
            ))}
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
