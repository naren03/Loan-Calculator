const amount = document.querySelector('#loanAmount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const resultForm = document.querySelector('.results');
const loader = document.querySelector('.loader');

resultForm.style.display = 'none';
loader.style.display = 'none';

document.querySelector('.btn').addEventListener('click', calculateLoan);

let totalInterest, totalPay, monthPay;

function calculateLoan() {
	totalInterest = parseFloat(
		(amount.value * interest.value * years.value) / 100,
	);
	totalPay = parseFloat(amount.value) + parseFloat(totalInterest);
	monthPay = totalPay / 12;

	loader.style.display = 'block';
	setTimeout(showResults, 2000);
}

function showResults() {
	loader.style.display = 'none';
	resultForm.style.display = 'block';
	document.querySelector('#monthPay').value = monthPay;
	document.querySelector('#totalPay').value = totalPay;
	document.querySelector('#totalInterest').value = totalInterest;
}
