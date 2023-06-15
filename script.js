function convert() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("from").value;
    var toCurrency = document.getElementById("to").value;
    
    // Replace the API_URL with the actual API URL that provides currency conversion rates
    var API_URL = "https://v6.exchangerate-api.com/v6/1328cc63bdfd6ebcaead54a2/latest/USD" + fromCurrency;
    
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        var conversionRate = data.rates[toCurrency];
        var result = (amount * conversionRate).toFixed(2);
        document.getElementById("result").innerHTML = amount + " " + fromCurrency + " = " + result + " " + toCurrency;
      })
      .catch(error => {
        console.log(error);
        document.getElementById("result").innerHTML = "An error occurred. Please try again.";
      });
  }
  