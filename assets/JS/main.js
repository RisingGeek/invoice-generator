window.addEventListener('load',init);

function init() {
    document.querySelector('#logo').addEventListener('change',function() {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('#logo').files[0];
        
        var reader = new FileReader();

        reader.onloadend = function() {
            var preview = document.createElement('img');
            document.querySelector('#log').appendChild(preview);
            preview.src=reader.result;
            document.querySelector('#hide').style.display='none';
        }
        if(file) {
            reader.readAsDataURL(file);
        }
        else {
            preview.src="";
        }
    });

    addRow();
}