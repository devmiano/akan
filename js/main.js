// Function to refresh the form after submition
function formReset() {
  document.getElementById('form_data').reset();
}

function akanForm() {
  var gender = document.getElementById('gender').value;
  var birthDay = document.getElementById('birthday').value;

  // array of birth names according to the day
  const akanArray = [
    ['Sunday', 'Kwasi', 'Akosua'],
    ['Monday', 'Kwado', 'Adwoa'],
    ['Tuesday', 'Kwabena', 'Abenaa'],
    ['Wednesday', 'Kwaku', 'Akua'],
    ['Thursday', 'Yaw', 'Yaa'],
    ['Friday', 'Kofi', 'Afua'],
    ['Saturday', 'Kwame', 'Ama'],
  ];

  // check for the day of birth from the birthday inputed
  const d = new Date(birthDay);
  let day = d.getDay();
  let year = d.getFullYear();

  var dayOfTheWeek = akanArray[day][0];
  var maleName = akanArray[day][1];
  var femaleName = akanArray[day][2];
  const output = document.getElementById('message');

  if (gender == '') {
    alert('Please specify a gender');
  } else if (year >= 2021) {
    alert('Please give a valid birthday');
  } else if (gender == 'male') {
    output.innerHTML =
      'You were born on a ' +
      dayOfTheWeek +
      ' and your akan name is ' +
      maleName;
  } else if (gender == 'female') {
    output.innerHTML =
      'You were born on a ' +
      dayOfTheWeek +
      ' and your akan name is ' +
      femaleName;
  }

  formReset();
}
