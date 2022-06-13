$('.buttons .choose-projects').click(function(event){
    console.log(event.target)
    let targetButton = $(event.target)
    $(".buttons .choose-projects").removeClass("active-button")
    if(targetButton.hasClass("personalproj-btn")){
        $(this).addClass("active-button")
        $(".personal-projects").removeClass("d-none")
        $(".frontendmentor, .see-more").addClass("d-none")
    }
    if(targetButton.hasClass("fem-btn")){
        $(this).addClass("active-button")
        $(".frontendmentor, .see-more").removeClass("d-none")
        $(".personal-projects").addClass("d-none")
    }
})

$("a[href='#scroll-top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
