var dashboard = {
    edit: false,
    init: function () {
        $(".nav-menu-side").on("click", function (event) {
            dashboard.handleSteps(event);
        });
        $(".login-mobile").on("click", function (event) {
            dashboard.handleMobileLogin();
        });
        $(".add-rows").on("click", function (event) {
            dashboard.addMoreUsers(event);
        });
        $(".add-user .item .small-button").on("click", function (event) {
            dashboard.saveUserToDB(event);
        });
        $(".edit-order-meals").on("click", function (event) {
            dashboard.editOrderMeals(event);
        });
        $(".delete-order-meals").on("click", function (event) {
            dashboard.deleteOrderMeals(event);
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
    addMoreUsers: function (event) {
        const element = $(event.currentTarget)[0];
        let addRows = '<div class="add-user">';
        addRows += '<div class="item f-l">';
        addRows += "<input ";
        addRows += ' type="text"';
        addRows += ' name="Name"';
        addRows += ' placeholder="Name"';
        addRows += ' class="f-input-medium"';
        addRows += ' value=""';
        addRows += " />";
        addRows += "</div>";
        addRows += '<div class="item f-l">';
        addRows += "<input";
        addRows += ' type="email"';
        addRows += ' name="Name"';
        addRows += ' placeholder="Email"';
        addRows += ' class="f-input-medium"';
        addRows += ' value=""';
        addRows += "/>";
        addRows += "</div>";
        addRows += '<div class="item f-l">';
        addRows += "<input";
        addRows += ' type="text"';
        addRows += ' name="Name"';
        addRows += ' placeholder="Mobile"';
        addRows += ' class="f-input-medium"';
        addRows += ' value=""';
        addRows += " /></div>";
        addRows +=
            '<div class="item f-l"><button class="small-button">Go</button>';
        addRows += '</div><div class="clr"></div></div>';

        $(".add-user-container").append(addRows);
    },
    saveUserToDB: function (event) {
        var element = $(event.currentTarget)[0];
        const input = $(element).parent().parent().find("input");
        let userData = {
            name: $(input[0]).val(),
            email: $(input[1]).val(),
            mobile: $(input[2]).val(),
        };

        // use this data to do ajax call
        console.log("userData", userData);
    },
    removeReadOnly: function (inputArray) {
        for (var i = 0; i < inputArray.length; i++) {
            $(inputArray[i]).removeClass("show-only");
            $(inputArray[i]).removeAttr("readonly");
        }
    },
    addReadOnly: function (inputArray) {
        for (var i = 0; i < inputArray.length; i++) {
            $(inputArray[i]).addClass("show-only");
            $(inputArray[i]).attr("readonly", true);
        }
    },
    editOrderMeals: function (event) {
        var element = $(event.currentTarget)[0];
        const input = $(element).parent().parent().find("input");
        if (this.edit === false) {
            this.removeReadOnly(input);
            this.edit = true;
        } else {
            this.edit = false;
            this.addReadOnly(input);
        }
    },
    deleteOrderMeals: function (event) {
        var element = $(event.currentTarget)[0];
        const parent = $(element).parent().parent();
        const input = $(element).parent().parent().find("input");
        const mealOrder = {
            mealName: $(input[0]).val(),
            mealQuantity: $(input[1]).val(),
        };
        parent.remove();
        // make delete call
    },
};

$(document).ready(function () {
    dashboard.init();
});
