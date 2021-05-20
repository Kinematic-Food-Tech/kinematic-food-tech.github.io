let mealSubscriptionObject = {
    mealSubscription: [],
    skipNoneVegDays: [],
    cuisineSelected: [],
};
let getStartedSteps = {
    init: function () {
        $(".step-par-actions .prev a").on("click", function () {
            getStartedSteps.moveSteps("prev");
        });
        $(".step-par-actions .next a").on("click", function () {
            getStartedSteps.moveSteps("next");
        });
        $(".step-btn-slide").on("click", function (event) {
            getStartedSteps.buildMealSubscriptionInfo(event);
        });
        $(".step-btn-meal-subs").on("click", function (event) {
            getStartedSteps.subscriptionOption(
                event,
                mealSubscriptionObject.mealSubscription,
                "mealsubs"
            );
        });
        $(".slide-skip-nv").on("click", function (event) {
            getStartedSteps.subscriptionOption(
                event,
                mealSubscriptionObject.skipNoneVegDays,
                "skipday"
            );
        });
        $(".slide-cuisine").on("click", function (event) {
            getStartedSteps.subscriptionOption(
                event,
                mealSubscriptionObject.cuisineSelected,
                "cuisine"
            );
        });
    },
    moveSteps: function (type) {
        let slides = $(".menu-building-options");
        let activeIndex = getStartedSteps.getActiveIndex(slides);
        switch (type) {
            case "prev":
                if (activeIndex > 0) {
                    $(slides).removeClass("active");
                    activeIndex = activeIndex - 1;
                    $(slides[activeIndex]).addClass("active");
                    getStartedSteps.moveStepsInFooter(activeIndex);
                }
                break;
            case "next":
                if (activeIndex < slides.length - 1) {
                    $(slides).removeClass("active");
                    activeIndex = activeIndex + 1;
                    $(slides[activeIndex]).addClass("active");
                    getStartedSteps.moveStepsInFooter(activeIndex);
                }
                break;
        }
    },
    getActiveIndex: function (data) {
        for (let i = 0; i < data.length; i++) {
            if ([...data[i].classList].includes("active")) {
                return i;
            }
        }
    },
    moveStepsInFooter: function (count) {
        let steps = $(".footer-steps-wrap .step");
        $(steps).removeClass("step-done");
        $(steps[0]).addClass("step-done");
        for (let i = 0; i < count; i++) {
            $(steps[i + 1]).addClass("step-done");
        }
    },
    buildMealSubscriptionInfo: function (event) {
        let element = event.currentTarget;
        let data = $(element).data("info");
        console.log(data);
        mealSubscription = Object.assign(mealSubscriptionObject, data);
        console.log(mealSubscription);
        if (data.potionSize) {
            console.log("last step");
            sessionStorage.setItem(
                "mealSubsInfo",
                JSON.stringify(mealSubscription)
            );
        }
    },
    subscriptionOption: function (event, arr, dataVar) {
        let element = event.currentTarget;
        let data = $(element).data(dataVar);
        console.log("data", data);
        console.log("arr", arr);
        if (arr.includes(data)) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === data) {
                    data.splice(i, 1);
                }
            }
        } else {
            arr.push(data);
        }
    },
};

$(document).ready(function () {
    getStartedSteps.init();
});
