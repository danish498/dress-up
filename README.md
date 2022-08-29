## Lessons Learned

This is also a firebase auth and database but with email and password, here I have learn how to initiate the email and pass log in field and store these user data to firebase database.

```javacript

// in firebase utils

export const createAuthUsersWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

/// some change in firebase store bd instance


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
    } catch (error) {
      if (error.code === `auth/email-already-in-use`) {
        alert(`Can't create user, email already in use!`);
      } else {
        console.log('user creation encounter an errro', error);
      }
    }
  };

```

## 🛠 Skills

Javascript, HTML, CSS, Reactjs, Redux, Git and GitHub, Bootstrap, Sass,
MaterialUI, Node js,

## 🚀 About Me

My name is Daanish Noor. I have complited MCA in 2021, for me programing is my passion(PP).
