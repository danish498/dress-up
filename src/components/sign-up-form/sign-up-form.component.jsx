import {
  createAuthUsersWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // console.log(formFields);

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const { displayName, email, password, confirmPassword } = formFields;

  const handelChnage = (event) => {
    // console.log(event.target);

    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setFormFields({ ...formFields, [name]: value }); // tricky***
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(`password do not match`);
      return;
    }

    try {
      const { user } = await createAuthUsersWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName }); /// this is for the firebase database
      resetFormField();
    } catch (error) {
      if (error.code === `auth/email-already-in-use`) {
        alert(`Can't create user, email already in use!`);
      } else {
        console.log('user creation encounter an errro', error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <spam>Sign up with your email and password</spam>

      <form onSubmit={handlerSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handelChnage}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handelChnage}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handelChnage}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm password'
          type='Password'
          required
          onChange={handelChnage}
          name='confirmPassword'
          value={confirmPassword}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
