//BMI Calculator
function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('bmi-result').innerHTML = "Please enter valid values.";
    return;
  }

  const bmi = weight / (height * height);
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  document.getElementById('bmi-result').innerHTML = 
    `<p>Your BMI is <strong>${bmi.toFixed(1)}</strong> — <span>${category}</span></p>`;
}


// Contact 

  function showConfirmation() {
    document.getElementById('confirmation').style.display = 'block';
  }