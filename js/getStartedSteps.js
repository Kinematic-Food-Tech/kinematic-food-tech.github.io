let getStartedSteps = {
    init: function () {
        $(".step-par-actions .prev a").on("click", function () {
            getStartedSteps.moveSteps("prev");
        });
        $(".step-par-actions .next a").on("click", function () {
            getStartedSteps.moveSteps("next");
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
            console.log("here", steps[i]);
            $(steps[i + 1]).addClass("step-done");
        }
    },
};

$(document).ready(function () {
    getStartedSteps.init();
});
