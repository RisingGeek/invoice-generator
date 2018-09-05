document.querySelector('#download').addEventListener('click', function() {
    var doc= new jsPDF();
    doc.text($('#invoice').text(),100,10,'center');
    doc.setFontType("bold");
    doc.text($('#from').val(),10,80);
    doc.setFontType("normal");
    doc.text($('#toShow').val(),10,90);
    doc.setFontType("bold");
    doc.text($('#to').val(),10,100);
    doc.setFontType("normal");
    doc.text($('#dateShow').val()+':',120,75);
    doc.text($('#date').val(),150,75);
    doc.text($('#dueShow').val()+':',120,85);
    doc.text($('#due').val(),150,85);
    doc.setFontType("bold");
    doc.text($('#balanceShow').val()+':',120,95);
    doc.text($('#balanceDue').text(),160,95);
    doc.text($('#i').text(),10,115);
    doc.text($('#q').text(),100,115);
    doc.text($('#r').text(),140,115);
    doc.text($('#a').text(),170,115);

    /*let quantity = document.querySelector('#add').querySelectorAll('.quantity');
    let rate = document.querySelector('#add').querySelectorAll('.rate');
    let amount = document.querySelector('#add').querySelectorAll('.Amount');
    for(let i = 0; i < quantity.length; i++) {
        doc.text()
    }*/
    doc.save('invoice.pdf');
});