$(document).ready(function () {

    const $submitBtn = $('.modal-submit-btn')
    $('#form input,#form select').on('change', function () {
        if (
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="email"]').val() !== "" &&
            $('#form select').val() !== 0 &&
            $('#form input[type="datetime-local"]').val() !== ""
        ) {
            $submitBtn.prop('disabled', false);

        } else {
            $submitBtn.prop('disabled', true);
        }
    });

});

// window.onload = function () {
//     alert("＜<js-submit.js >＞Loading completed");
// };