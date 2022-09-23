function compute() {
  principal = document.getElementById("principal").value;
  rate = parseFloat(document.getElementById("rate").value);
  years = parseInt(document.getElementById("years").value);

  if (principal <= 0 || principal == "") {
    alert("Enter a positive number");
  } else {
    // console.log(principal, rate, years);

    interest = (principal * rate * years) / 100;
    // console.log(interest);

    resultantYear = parseInt(new Date().getFullYear()) + years;
    // console.log(date.getFullYear());

    result = document.getElementById("result");
    output = `If you deposit ${principal}, 
            \nat an interest rate of ${rate}.
            \nYou will receive an amount of ${interest},
            \n  in the year ${resultantYear}`;

    result.innerHTML = output;
  }
}

function updateRate() {
  rate = document.getElementById("rate").value;
  currentRate = document.getElementById("currentRate");
  currentRate.innerHTML = rate + "%";
}
