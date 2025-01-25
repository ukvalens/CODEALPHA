document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const todayDateString = today.toDateString();
    document.getElementById('today-date').textContent = todayDateString;
  });
  
  document.getElementById('age-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
  
    if (dobInput.value === '') {
      document.getElementById('result').textContent = 'Please fill out the Date of Birth field.';
      document.getElementById('result').style.color = 'red';
      return;
    }
  
    if (isNaN(dob.getTime())) {
      document.getElementById('result').textContent = 'Please enter a valid date.';
      document.getElementById('result').style.color = 'red';
      return;
    }
  
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    document.getElementById('result').textContent = `Your age is ${age} years.`;
    document.getElementById('result').style.color = 'black';
  });
  