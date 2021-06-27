var mainMenu = {
    init: function () {
        mainMenu.setTimeValue();
        $(".datepicker").datepicker();
        $(".datepicker").on("change", function (e) {
            mainMenu.setDate(e.currentTarget.value);
        });
        mainMenu.setTodaysDate();
    },
    setTodaysDate: () => {
        var date = new Date();
        var makeDateString = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        mainMenu.setDate(makeDateString);
    },
    setTimeValue: () => {
        var date = new Date();
        var dateTime = `${
            date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()
        }:${
            date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        } ${date.getHours() >= 12 ? "PM" : "AM"}`;
        $(".curr-time-wr").val(dateTime);
    },
    setDate: (dateValue) => {
        let dateArr = dateValue.split("/");
        let monthsArr = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let dateString = `${dateArr[1]}th ${monthsArr[parseInt(dateArr[0])]} ${
            dateArr[2]
        }`;
        $(".datepicker").val(dateString);
    },
};
$(document).ready(function () {
    mainMenu.init();
});
