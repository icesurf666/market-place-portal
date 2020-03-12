export const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  }
  if (!values.email) {
    errors.email = 'Обязательное поле';
  }
  if (!values.phone) {
    errors.phone = 'Обязательное поле';
  }
  if (!values.password) {
    errors.password = 'Обязательное поле';
  }
  if (!values.c_password) {
    errors.c_password = 'Обязательное поле';
  }
  if (values.password !== values.c_password) {
    errors.c_password = 'Пароль не совпадают'
  }
  if (!values.description) {
    errors.description = 'Обязательное поле';
  }
  return errors;
};