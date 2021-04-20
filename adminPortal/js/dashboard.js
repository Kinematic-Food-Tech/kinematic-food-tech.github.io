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
        $(".new-order-act button").on("click", function (event) {
            dashboard.addNewOrders(event);
        });
        $(".new-order-wrap .action button").on("click", function (event) {
            dashboard.saveAdditionalOrders(event);
        });
        $(".approve-user-button").on("click", function (event) {
            dashboard.approveUserOne(event);
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
    addNewOrders: function (event) {
        const element = $(event.currentTarget)[0];

        const addRows =
            '<div class="new-order-wrap">' +
            '                                <div class="date f-l">' +
            '                                    <input type="date" />' +
            "                                </div>" +
            '                                <div class="plan f-l">' +
            "                                    <input" +
            '                                        type="text"' +
            '                                        class="f-input-small"' +
            '                                        placeholder="Plan"' +
            "                                    />" +
            "                                </div>" +
            '                                <div class="quantity f-l">' +
            "                                    <input" +
            '                                        type="text"' +
            '                                        class="f-input-small"' +
            '                                        placeholder="Quantity"' +
            "                                    />" +
            "                                </div>" +
            '                                <div class="office-wrap f-l">' +
            '                                    <select class="small-select">' +
            "                                        <option>BTM</option>" +
            "                                        <option>BTM</option>" +
            "                                        <option>BTM</option>" +
            "                                        <option>BTM</option>" +
            "                                    </select>" +
            "                                </div>" +
            '                                <div class="action f-l">' +
            '                                    <button class="small-button">' +
            "                                        Add to Order" +
            "                                    </button>" +
            "                                </div>" +
            '                                <div class="clr"></div>' +
            "                            </div>";

        $(".new-order").append(addRows);
    },
    saveAdditionalOrders: function (event) {
        var element = $(event.currentTarget)[0];
        const parent = $(element).parent().parent();
        const input = $(element).parent().parent().find("input");
        const addOrder = {
            date: $(input[0]).val(),
            plan: $(input[1]).val(),
            quantity: $(input[2]).val(),
            office: $(element).parent().parent().find("select").val(),
        };
        console.log(addOrder);
        //make api call to save this order
    },
    approveUserOne: function (event) {
        var element = $(event.currentTarget)[0];
        const parent = $(element).parent().parent();
        console.log(parent.find("input")[0]);
        if (parent.find("input")[0].checked) {
            let data = $(element).data("user");
            console.log(data);
            // push this data to api that will come from a data attribute from front end from the button
            // inside data attribute need the user object which then needs to be pushed to api
        }
    },
};

$(document).ready(function () {
    dashboard.init();
});
