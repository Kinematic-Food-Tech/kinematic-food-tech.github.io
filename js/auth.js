var otp = [];
var auth = {
    init: function () {
        $(".verify-phone").on("click", function () {
            auth.verifyPhone();
        });
        $(".phone-input").on("change", function () {
            $(".phone-sign-in .error").addClass("hidden");
        });
        $(".digit-group")
            .find("input")
            .each(function () {
                $(this).attr("maxlength", 1);
                $(this).on("keyup", function (e) {
                    var parent = $($(this).parent());

                    otp.push($(this).val());

                    if (e.keyCode === 8 || e.keyCode === 37) {
                        var prev = parent.find(
                            "input#" + $(this).data("previous")
                        );

                        if (prev.length) {
                            $(prev).select();
                        }
                    } else if (
                        (e.keyCode >= 48 && e.keyCode <= 57) ||
                        (e.keyCode >= 65 && e.keyCode <= 90) ||
                        (e.keyCode >= 96 && e.keyCode <= 105) ||
                        e.keyCode === 39
                    ) {
                        var next = parent.find("input#" + $(this).data("next"));

                        if (next.length) {
                            $(next).select();
                        } else {
                            auth.validateOTP(otp.join(""));
                        }
                    }
                });
            });
    },
    validateOTP: function (otp) {
        console.log(otp);
        //make call to verify otp
        //service call to push otp
    },
    verifyPhone: function () {
        let phoneNumber = $(".phone-input").val();
        let pattern = /^[6-9]\d{9}$/g;
        if (pattern.test(phoneNumber)) {
            // valid mobile number push otp
            $(".otp-in").removeClass("hidden");
        } else {
            $(".phone-sign-in .error").removeClass("hidden");
        }
    },
};

$(document).ready(function () {
    auth.init();
});
