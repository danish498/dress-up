import { useState } from 'react';

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUsersWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';
import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // console.log(formFields);

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup(); // console the user once
    // console.log(user);
    const userDocRef = createUserDocumentFromAuth(user);
  };

  const { email, password } = formFields;

  const handelChnage = (event) => {
    // console.log(event.target);

    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setFormFields({ ...formFields, [name]: value }); // tricky***
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUsersWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <spam>Sign in with your email and password</spam>

      <form onSubmit={handlerSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
