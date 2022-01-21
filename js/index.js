let form = document.getElementById('loan-form')
let amount = document.getElementById('amount')
let interest = document.getElementById('interest')
let years = document.getElementById('years')
let monthPay = document.getElementById('monthly-payment')
let totalPay = document.getElementById('total-payment')
let totalInterest = document.getElementById('total-interest')
let heading = document.getElementById('heading')
let loader = document.getElementById('loading')
let results = document.getElementById('results')


loader.style.display = 'none'
results.style.display = 'none'


// listen for submit on the form

form.addEventListener('submit', calcRes)

function calcRes(e) {
    let principal = parseFloat(amount.value);
    let calcInt = parseFloat(interest.value) / 100 / 12 ;
    let calcPay = parseFloat(years.value) * 12;

    // compute monthly payment

    let x = Math.pow(1 + calcInt, calcPay)
    let monthly = (principal*x*calcInt)/(x-1);

    if (isFinite(monthly)) {
        monthPay.value = monthly.toFixed(2);
        totalPay.value = (monthly*calcPay).toFixed(2)
        totalInterest.value = ((monthly*calcPay)-principal).toFixed(2)

        loader.style.display = 'block'
        results.style.display = "none"
        setTimeout(()=>{loader.style.display = 'none'}, 2000)
        setTimeout(()=>{results.style.display = 'block'}, 2000)
    }
    else {
        let div = document.createElement('div')
        div.innerText = 'Please check the values entered'
        div.className = 'alert alert-danger'
        heading.insertAdjacentElement('afterend', div)

        setTimeout(()=>{div.style.display = "none"}, 3000)
    }
    
    
    e.preventDefault()
}