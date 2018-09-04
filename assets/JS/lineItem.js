document.querySelector('.lineItem').addEventListener('click', function() {
    let row = document.createElement('div');
    row.classList.add('row');
    document.querySelector('#add').appendChild(row);
    
    let col6 = document.createElement('div');
    col6.classList.add('col-sm-6');
    row.appendChild(col6);

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

    let desc = document.createElement('input');
    desc.type="text";
    desc.placeholder='Description of service or product';
    desc.classList.add('form-control');
    col6.appendChild(desc);

    let quantity = document.createElement('input');
    quantity.type="text";
    quantity.value=1;
    quantity.classList.add('form-control');
    col21.appendChild(quantity);

    let inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');
    col22.appendChild(inputGroup);
    let inputGroupPrepend = document.createElement('div');
    inputGroupPrepend.classList.add('input-group-prepend')
    inputGroup.appendChild(inputGroupPrepend);
    let span = document.createElement('span');
    span.classList.add('input-group-text');
    inputGroupPrepend.appendChild(span);
    span.innerHTML="$";
    let rate = document.createElement('input');
    rate.type="text";
    rate.classList.add('form-control');
    rate.value=0;
    inputGroup.appendChild(rate);

    let amount = document.createElement('p');
    amount.innerHTML='$ 0';
    col23.appendChild(amount);
});