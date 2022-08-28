import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  console.log(formFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handelChnage = (event) => {
    // console.log(event.target);

    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setFormFields({ ...formFields, [name]: value }); // tricky***
  };
  return (
    <>
      <h1>Sign up with your email and passwords</h1>

      <form>
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
