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
        $(".step-in-action button").on("click", function (event) {
            getStartedSteps.enableDisableCuisines(event);
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
            case "veg":
                $(slides).removeClass("active");
                activeIndex = activeIndex + 4;
                $(slides[activeIndex]).addClass("active");
                getStartedSteps.moveStepsInFooter(activeIndex);
                break;
            case "notSkipNonVeg":
                $(slides).removeClass("active");
                activeIndex = activeIndex + 2;
                $(slides[activeIndex]).addClass("active");
                getStartedSteps.moveStepsInFooter(activeIndex);
                break;
                break;
        }
    },
    enableDisableCuisines: function (event) {
        let element = event.currentTarget;
        let data = $(element).data("type");
        switch (data) {
            case "expand":
                $(".default-hidden").addClass("active");
                $(element).addClass("hidden");
                $(".step-in-action .compress").removeClass("hidden");
                break;
            case "compress":
                $(".default-hidden").removeClass("active");
                $(element).addClass("hidden");
                $(".step-in-action .expand").removeClass("hidden");
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
        mealSubscription = Object.assign(mealSubscriptionObject, data);

        if (data["mealCategory"] && data["mealCategory"] === "veg") {
            getStartedSteps.moveSteps("veg");
        } else if (data["skipNonVeg"] && data["skipNonVeg"] == "no") {
            getStartedSteps.moveSteps("notSkipNonVeg");
        } else {
            getStartedSteps.moveSteps("next");
        }

        if (data.potionSize) {
            sessionStorage.setItem(
                "mealSubsInfo",
                JSON.stringify(mealSubscription)
            );
            window.location.href = "food-summary.html";
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
