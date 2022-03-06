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
}
