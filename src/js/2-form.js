const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const name = event.target.name;
  const value = event.target.value;

  formData[name] = value;
  localStorage.setItem(key, JSON.stringify(formData));
}

const savedData = localStorage.getItem(key);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  localStorage.removeItem(key);
  event.currentTarget.reset();

  formData.email = '';
  formData.message = '';
}
