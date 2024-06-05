$(document).ready(function () {

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imgInpBr").change(function () {
        readURL(this);
    });

    $("#imgInp").bind('input', function () {
        $('#img-upload').attr('src', $(this).val()); //concatinate path if required
    });
});