const amountEl = document.getElementById("amount");
const rateEl = document.getElementById("rate");
const durationEl = document.getElementById("duration");
const monthlyPaymentEl = document.getElementById("monthly-payment");

function calcLoan() {
  const amount = amountEl.value;
  const rate = rateEl.value;
  const duration = durationEl.value;

  const interest = (amount * (rate * 0.01)) / duration;
  const monthlyPayment = amount / duration + interest.toFixed(2);

  monthlyPaymentEl.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}

amountEl.addEventListener("input", calcLoan);
rateEl.addEventListener("input", calcLoan);
durationEl.addEventListener("input", calcLoan);
