## Lessons Learned

Sign-up form - basically I learned, how to store the all value of the form, like name, password, emial at once.

```javacript

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const [formFields, setFormFields] = useState(defaultFormFields);

const handelChnage = (event) => {
    // console.log(event.target);

    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); // tricky***
    console.log(name, value);
  };


```

## 🛠 Skills

Javascript, HTML, CSS, Reactjs, Redux, Git and GitHub, Bootstrap, Sass,
MaterialUI, Node js,

## 🚀 About Me

My name is Daanish Noor. I have complited MCA in 2021, for me programing is my passion(PP).
