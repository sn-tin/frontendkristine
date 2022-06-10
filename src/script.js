$('.buttons .choose-projects').click(function(event){
    console.log(event.target)
    let targetButton = $(event.target)
    if(targetButton.hasClass("personalproj-btn")){
        $(this).addClass("active-button")
        $(".personal-projects").removeClass("d-none")
        $(".fem-btn").removeClass("active-button d-block")
        $(".frontendmentor").addClass("d-none")
    }
    if(targetButton.hasClass("fem-btn")){
        $(this).addClass("active-button")
        $(".frontendmentor").removeClass("d-none")
        $(".personalproj-btn").removeClass("active-button")
        $(".personal-projects").addClass("d-none")
    }
})

$('list-of-pages .pages').click(function(event){
    console.log(event.target)
    let targetLink = $(event.target)
    if(targetLink.hasClass("project-page")){
        $(this).addClass("active-page")
        $(".about-me-page").removeClass("active-page")
        $(".contact-page").removeClass("active-page")
    }
    if(targetLink.hasClass("about-me-page")){
        $(this).addClass("active-page")
        $(".project-page").removeClass("active-page")
        $(".contact-page").removeClass("active-page")
    }
    if(targetLink.hasClass("contact-page")){
        $(this).addClass("active-page")
        $(".project-page").removeClass("active-page")
        $(".about-me-page").removeClass("active-page")
    }
})