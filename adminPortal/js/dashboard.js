var dashboard = {
    init: function () {
        $(".nav-menu-side").on("click", function (event) {
            dashboard.handleSteps(event);
        });
        $(".login-mobile").on("click", function (event) {
            dashboard.handleMobileLogin();
        });
    },
    handleSteps: function (event) {
        var element = $(event.currentTarget)[0];
        switch (element.name) {
            case "addUser":
                $(".nav-menu-side").removeClass("active");
                $(element).addClass("active");
                $(".d-s").removeClass("active-step");
                $(".dashboard-step-1").addClass("active-step");
                break;
            case "analytics":
                $(".nav-menu-side").removeClass("active");
                $(element).addClass("active");
                $(".d-s").removeClass("active-step");
                $(".dashboard-step-2").addClass("active-step");
                break;
            case "ordering":
                $(".nav-menu-side").removeClass("active");
                $(element).addClass("active");
                $(".d-s").removeClass("active-step");
                $(".dashboard-step-3").addClass("active-step");
                break;
            case "approveUsers":
                $(".nav-menu-side").removeClass("active");
                $(element).addClass("active");
                $(".d-s").removeClass("active-step");
                $(".dashboard-step-4").addClass("active-step");
                break;
        }
    },
    handleMobileLogin: function () {
        $("#otp-modal").modal("show");
    },
};

$(document).ready(function () {
    dashboard.init();
});
