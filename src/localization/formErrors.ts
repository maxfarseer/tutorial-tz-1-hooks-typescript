interface IFormErrors {
  [key: string]: {
    [key: string]: string,
  };
}

const formErrors: IFormErrors = {
  ru: {
    incorrect_login_or_password: 'Имя пользователя или пароль введены не верно',
  },
  en: {
    incorrect_login_or_password: 'Incorrect login or password',
  },
}

export { formErrors }
