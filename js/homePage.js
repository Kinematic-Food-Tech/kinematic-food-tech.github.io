var homepage={
    init: function(){
        $(".question").on("click", function(event){
            homepage.handleFaq(event);
        });
    },
    handleFaq: function(event){
        var element=$(event.currentTarget.parentElement).find(".answer");
        
        if($(element).is(":visible")){
            $(".answer").css("display", "none");
            $(element).css("display", "none");
        } else {
            $(".answer").css("display", "none");
            $(element).css("display", "block");
        }
    }
}

$(document).ready(function(){
    homepage.init();
})