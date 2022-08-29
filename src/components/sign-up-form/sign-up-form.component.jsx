import {
  createAuthUsersWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { useState } from 'react';

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
    <>
      <h1>Sign up with your email and passwords</h1>

      <form onSubmit={handlerSubmit}>
        <label>Display name</label>
        <input
          type='text'
          required
          onChange={handelChnage}
          name='displayName'
          value={displayName}
        />

        <label>Email</label>
        <input
          type='email'
          required
          onChange={handelChnage}
          name='email'
          value={email}
        />

        <label>Password</label>
        <input
          type='password'
          required
          onChange={handelChnage}
          name='password'
          value={password}
        />

        <label>Confirm passwords</label>
        <input
          type='Password'
          required
          onChange={handelChnage}
          name='confirmPassword'
          value={confirmPassword}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
