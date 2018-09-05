function updateBalanceDue() {
    let quantity = document.querySelector('#add').querySelectorAll('.quantity');
    let rate = document.querySelector('#add').querySelectorAll('.rate');
    let amount = document.querySelector('#add').querySelectorAll('.Amount');
    var sum = 0;
    for(let i=0; i < quantity.length; i++) {
        sum+=Number(quantity[i].value)*Number(rate[i].value);
        amount[i].innerHTML=`$ ${Number((Number(quantity[i].value)*Number(rate[i].value)).toFixed(2))}`;
    }
    return sum;
}

function updateDue(sum) {
    let paid = Number(document.querySelector('#amountPaid').value);
    document.querySelector('#balanceDue').innerHTML=`$ ${Number((sum-paid).toFixed(2))}`;
    document.querySelector('#totalAmount').innerHTML=`$ ${Number(sum.toFixed(2))}`;
}

function subtotal(sum) {
    document.querySelector('#subtotalPrice').innerHTML=`$ ${Number(sum.toFixed(2))}`;
}

function getDiscount(sum) {
    return Number(document.querySelector('#discountPercent').value)/100*sum;
}