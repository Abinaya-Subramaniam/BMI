document.getElementById('calculateBtn').addEventListener('click', function () {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('result');
    const adviceDiv = document.getElementById('advice');
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.textContent = '⚠️ Please enter valid height and weight values!';
      resultDiv.style.color = 'red';
      adviceDiv.textContent = '';
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    resultDiv.style.color = '#333';
    resultDiv.textContent = `Your BMI is: ${bmi}`;
  
    if (bmi < 18.5) {
      adviceDiv.textContent = 'You are underweight. Consider consulting a nutritionist.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      adviceDiv.textContent = 'You have a normal weight. Great job maintaining your health!';
    } else if (bmi >= 25 && bmi < 29.9) {
      adviceDiv.textContent = 'You are overweight. Consider a balanced diet and regular exercise.';
    } else {
      adviceDiv.textContent = 'You are in the obese range. Consult a healthcare provider for guidance.';
    }
  });
  