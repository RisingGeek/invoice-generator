document.querySelector('.lineItem').addEventListener('click',addRow);

function addRow() {
    let row = document.createElement('div');
    row.classList.add('row');
    document.querySelector('#add').appendChild(row);
    
    let col5 = document.createElement('div');
    col5.classList.add('col-sm-5');
    row.appendChild(col5);

    let col21 = document.createElement('div');
    col21.classList.add('col-sm-2');
    row.appendChild(col21);

    let col22 = document.createElement('div');
    col22.classList.add('col-sm-2');
    row.appendChild(col22);

    let col23 = document.createElement('div');
    col23.classList.add('col-sm-2');
    col23.classList.add('text-center');
    row.appendChild(col23);

    let col1 = document.createElement('div');
    col1.classList.add('col-sm-1');
    let button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-danger');
    button.setAttribute('data-row','deleteAfter');
    button.addEventListener('click',function() {
        deleteLineItem(row);
    });
    button.innerHTML='&times';
    col1.appendChild(button);
    row.appendChild(col1);

    let desc = document.createElement('input');
    desc.type="text";
    desc.placeholder='Description of service or product';
    desc.classList.add('form-control');
    desc.classList.add('description');
    col5.appendChild(desc);

    let quantity = document.createElement('input');
    quantity.type="text";
    quantity.value=1;
    quantity.classList.add('form-control');
    quantity.classList.add('quantity');
    col21.appendChild(quantity);
    quantity.addEventListener('keyup',function() {
        subtotal(updateAll());
    });

    let inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');
    col22.appendChild(inputGroup);
    let inputGroupPrepend = document.createElement('div');
    inputGroupPrepend.classList.add('input-group-prepend');
    inputGroup.appendChild(inputGroupPrepend);
    let span = document.createElement('span');
    span.classList.add('input-group-text');
    inputGroupPrepend.appendChild(span);
    span.innerHTML="$";
    let rate = document.createElement('input');
    rate.type="text";
    rate.classList.add('form-control');
    rate.classList.add('rate');
    rate.value=0;
    inputGroup.appendChild(rate);
    rate.addEventListener('keyup',function() {
        subtotal(updateAll());
    });

    let amount = document.createElement('p');
    amount.innerHTML='$ 0';
    amount.classList.add('Amount');
    col23.appendChild(amount);
}

document.querySelector('#taxPercent').addEventListener('keyup', function() {
    updateAll();
});

document.querySelector('#discountPercent').addEventListener('keyup', function() {
    updateAll();
});

document.querySelector('#shippingCharges').addEventListener('keyup', function() {
    updateAll();
});

document.querySelector('#amountPaid').addEventListener('keyup', function() {
    updateAll();
});