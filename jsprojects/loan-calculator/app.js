// setTimeout(callback, 3000);

// function callback() {
//   console.log('I am getting called after 5 seconds');
//   document.getElementById('loading').style.display = 'none';
//   document.getElementById('results').style.display = 'block';
// }

// listen for form submit
document.getElementById('loan-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // console.log('Form submit event');
  // If results are there, hide them
  document.getElementById('results').style.display = 'none';
  // show loading indicator
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
});

function calculateResults() {
  console.log('Calculating....');
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalInterest = document.getElementById('total-interest');
  const totalPayment = document.getElementById('total-payment');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // calculate month payment
  const x = Math.pow(calculatedInterest + 1, calculatedPayments)
  const monthly = (principal * calculatedInterest * x)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';
  } else {
    console.log('Please check your numbers. They are incorrect!');
    alert('Please check your numbers. They are incorrect!');
  }

}

