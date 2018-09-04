window.addEventListener('load',init);

function init() {
    document.querySelector('#logo').addEventListener('change',function() {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('#logo').files[0];
        
        var reader = new FileReader();

        reader.onloadend = function() {
            preview.src=reader.result;
        }
        if(file) {
            reader.readAsDataURL(file);
        }
        else {
            preview.src="";
        }
    });
}