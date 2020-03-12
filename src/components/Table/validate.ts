export const validate = (values: any) => {
  const errors: any = {};
  if (!values.city) {
    errors.city = 'Обязательное поле';
  }
  if (!values.country) {
    errors.country = 'Обязательное поле';
  }
  if (!values.address) {
    errors.address = 'Обязательное поле';
  }
  if (!values.phone_mobile) {
    errors.phone_mobile = 'Обязательное поле';
  }
  return errors;
};