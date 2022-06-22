$(document).ready(function() {

    if ($('#leadAlreadyCreated').val() == 'true') {
        functionBeforeSend();
        functionSuccess();
    }

    // Regex if surname doesnt exist
    var forename_regex, forename_error;
    if ($('input[name="surname"]').length == 0) {
        forename_regex = /^[A-Za-zА-Яа-яЁё]+[ ][A-Za-zА-Яа-яЁё*\-?]+$/i;
        forename_error = "Введите имя корректно! Имя и фамилия через пробел, без цифр!";
    } else {
        forename_regex = /^[A-Za-zА-Яа-яЁё]{2,}$/i;
        forename_error = "Введите имя корректно! Минимум 2 символа, без цифр!";
    }

    // Form input validation

    jQuery.extend(jQuery.validator.messages, {
        required: "Обязательное поле!"
    });
    $.validator.addMethod("forename", function(value, element) {
        return this.optional(element) || forename_regex.test(value);
    }, forename_error);

    $.validator.addMethod("surname", function(value, element) {
        return this.optional(element) || /^[A-Za-zА-Яа-яЁё*\-? ]{2,}$/i.test(value);
    }, "Введите фамилию корректно! Минимум 2 символа, без цифр!");

    $.validator.addMethod("email", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
    }, "Введите почту корректно!");

    $.validator.addMethod("button", function(value, element) {
        return this.optional(element) || /[^ ]/i.test(value);
    }, "Вы не нажали кнопку!");

    function functionBeforeSend() {
        $(".btn-reg").attr("disabled", true);
        $("form").hide();
        $(".waiting_block").css('display', 'block');
    }

    function functionSuccess(data) {
        $(".waiting_block").css('display', 'none');
        $(".success_block").css('display', 'inline-block');

        let answer = JSON.parse(data);

        if ($('#turnOnFacebookPixel').val() == 'true' && answer['status'] == 'OK') {

            fbq('track', 'CompleteRegistration');
            fbq('track', 'ViewContent');
            fbq('track', 'Lead');

        }

        console.log("data", data);
    }

    $("form input, .btn-reg").click(function() {
        var form = $(this).parents('form:first');
        form.validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                forename: {
                    required: true,
                },
                surname: {
                    required: true,
                },
                phone: {
                    required: true,
                },
                forename: "required forename",
                surname: "required surname",
                email: "required email",
                button: "required button",
                phone: "required phone",
            },
            errorPlacement: function(error, element) {
                if (element.attr("name") == "phone") {
                    error.insertBefore(form.find(".error_div"));

                    console.log("element", element);
                } else {
                    error.insertAfter(element);

                }
            }
        });
    });

    $(".btn-reg").click(function() {
        var form = $(this).parents('form:first');
        if (form.valid() && form.find('.error-msg').hasClass("hide")) {
            var data = $(this).closest("form").serialize();
            console.log(data)
            $.ajax({
                url: 'mail.php',
                type: "POST",
                data: data,
                dataType: "html",
                beforeSend: functionBeforeSend,
                success: functionSuccess
            });
        }
    });

    // Phone validation

    let ary = Array.prototype.slice.call(document.querySelectorAll(".phone"));

    ary.forEach(function(el) {
        PhoneDisplay(el);
    })

    function PhoneDisplay(input) {

        var iti = window.intlTelInput(input, {
            initialCountry: "ru",
            autoHideDialCode: "false",
            separateDialCode: "true",
            utilsScript: "assets/landing/js/utils.js"
        });

        var errorMap = ["Укажите корректный номер телефона.", "Не корректный код страны", "Слишком короткий номер телефона", "Слишком длинный номер телефона", "Укажите корректный номер телефона."];

        var reset = function(this_valid, this_error) {
            input.classList.remove("error");
            this_error.text('');
            this_error.addClass('hide');
            this_valid.addClass("hide");

            $(".countryISO2").val(iti.getSelectedCountryData().iso2);
            $(".countryDialCode").val("+" + iti.getSelectedCountryData().dialCode);
        };
        $(input).blur(function() {
            var this_valid = $(this).parents().children(".valid-msg");
            var this_error = $(this).parents().children(".error-msg");
            reset(this_valid, this_error);
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    this_valid.removeClass("hide");
                } else {
                    input.classList.add("error");
                    var errorCode = iti.getValidationError();
                    this_error.text(errorMap[errorCode]);
                    this_error.removeClass('hide');
                }
            }
        });
        $(input).on("change keyup", function() {
            var this_valid = $(this).parents().children(".valid-msg");
            var this_error = $(this).parents().children(".error-msg");
            reset(this_valid, this_error);
            $.validator.addMethod("phone", function(value, element) {
                if (iti.isValidNumber()) {
                    return true;
                } else {
                    return false;
                }
            }, "");
        });


        // Mask
        $(".phone").on("change keyup", function() {
            var mask_regex = $(".phone").attr('placeholder').replace(/[0-9]/g, 0);
            $('.phone').mask(mask_regex);
        });
        $(".phone").on("countrychange", function(e, countryData) {
            $(".phone").val('');
        });
    }

    // Email input
    var EmailDomainSuggester = {
        domains: ["yahoo.com", "gmail.com", "google.com", "hotmail.com", "me.com", "aol.com", "mac.com", "live.com", "comcast.com", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk", "facebook.com", "verizon.net", "att.net", "gmz.com", "mail.com"],
        bindTo: $('input[name="email"]'),
        init: function() {
            this.addElements();
            this.bindEvents();
        },
        addElements: function() {
            this.datalist = $("<datalist />", {
                id: 'email-options'
            }).insertAfter(this.bindTo);
            this.bindTo.attr("list", "email-options");
        },
        bindEvents: function() {
            this.bindTo.on("keyup", this.testValue);
        },
        testValue: function(event) {
            var el = $(this),
                value = el.val();
            if (value.indexOf("@") != -1) {
                value = value.split("@")[0];
                EmailDomainSuggester.addDatalist(value);
            } else {
                EmailDomainSuggester.datalist.empty();
            }

        },
        addDatalist: function(value) {
            var i, newOptionsString = "";
            for (i = 0; i < this.domains.length; i++) {
                newOptionsString +=
                    "<option value='" +
                    value +
                    "@" +
                    this.domains[i] +
                    "'>";
            }
            this.datalist.html(newOptionsString);
        }
    }
    EmailDomainSuggester.init();

});