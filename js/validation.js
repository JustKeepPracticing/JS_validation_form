/**
 * Started working on 6/27/2017.
 */
// this function is for labels to make them a bit smarter

$(document).ready(function () {
    $('#validation-form input').blur(function () {
        var text = $(this).val();
        if (text === '') {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
      })

    });

    // Custom Form Validation

    var errorMsg_f_name = 'Please enter your first name';
    var errorMsg_l_name = 'Please enter your last name';
    var errorMsg_username = 'Please enter your username';
    var errorMsg_email = 'Please enter your email';
    var errorMsg_password = 'Please enter your password';
    var errorMsg_confirm_pass = 'Please confirm your password';

    $('#submit').on('click', function () {
        var valid = true;
        if ($('.first-name').val() == '') {
            check_error('.error_msg_name', errorMsg_f_name);
        }
         if($('.last-name').val() == '' ) {
             check_error('.error_msg_Lname', errorMsg_l_name )
         }
        if($('.u_name').val() == '' ) {
            check_error('.error_msg_username', errorMsg_username)
        }
        if($('.email').val() == '' ) {
            check_error('.error_msg_email', errorMsg_email)
        }
        if($('.password').val() == '' ) {
            check_error('.error_msg_pass', errorMsg_password)
        }
        if($('.pass_confirm').val() == '' ) {
            check_error('.error_msg_conf_pass', errorMsg_confirm_pass)
        }
    });

    $('.first-name').blur(function () {
        if ($('.first-name').val() == '') {
            validation_fail('.first-name');
            check_error('.error_msg_name', errorMsg_f_name);
        }
        else {
            validation_success('.first-name');
        }
    });

    $('.last-name').blur(function () {
        if ($('.last-name').val() == '') {
            validation_fail('.last-name');
            check_error('.error_msg_Lname', errorMsg_l_name )
        }
        else {
            validation_success('.last-name');
        }
    });

    $('.u_name').blur(function () {
        if ($('.u_name').val() == '') {
            validation_fail('.u_name');
            check_error('.error_msg_username', errorMsg_username)
        }
        else {
            validation_success('.u_name')
        }
    });
    $('.email').blur(function () {
        if ($('.email').val() == '') {
            validation_fail('.email');
            check_error('.error_msg_email', errorMsg_email)
        }
        else {
            validation_success('.email')
        }
    });
    $('.password').blur(function () {
        if ($('.password').val() == '') {
            validation_fail('.password');
            check_error('.error_msg_pass', errorMsg_password)
        }
        else {
            validation_success('.password')
        }
    });
    $('.pass_confirm').blur(function () {
        if ($('.pass_confirm').val() == $('.password').val()) {
          validation_success('.pass_confirm')
        }
        else if ($('.pass_confirm').val() !== '') {
          validation_fail('.pass_confirm');
          check_error('.error_msg_conf_pass', errorMsg_confirm_pass)
        }
    });

function check_error(selector, errorMsg) {
    $(selector).html('');
    $(selector).append(errorMsg);
    valid = false;
}

function validation_success(selector) {
    $(selector).css(
        {
            'border-bottom': '.1em solid green',
            'transition': '1s linear'
        })
}

function validation_fail(selector) {
    $(selector).css(
        {
            'border-bottom': '.1em solid red',
            'transition': '1s linear'
        })
}
