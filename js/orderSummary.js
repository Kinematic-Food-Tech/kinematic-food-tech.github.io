let mealSelectedType = "";
var orderSummary = {
    init: function () {
        calendar = new CalendarYvv(
            "#calendar",
            moment().format("Y-M-D"),
            "Monday"
        );

        calendar.funcPer = function (ev) {
            orderSummary.pushStartDate(ev);
        };
        calendar.diasResal = [];

        $(".select-start-date").on("click", function (event) {
            let element = event.currentTarget;
            mealSelectedType = $(element).data("mealtype");
            calendar.createCalendar();
            setTimeout(() => {
                $("#calendar-modal").modal("show");
            }, 100);
        });
        $(".add-new-addr-link").on("click", function (event) {
            setTimeout(() => {
                $("#address-modal").modal("show");
            }, 100);
        });
        $(".control-actions-address a.glyphicon-pencil").on(
            "click",
            function (event) {
                setTimeout(() => {
                    $("#address-modal").modal("show");
                }, 100);
            }
        );
    },
    pushStartDate: function (ev) {
        let startDate = ev.currentSelected;
        //push start date to api
        // use startDate for current selected date and mealSelectedType for subscription item i.e  breakfast/lunch/snacks/dinner
        $("#calendar-modal").modal("hide");
    },
};
$(document).ready(function () {
    orderSummary.init();
});
