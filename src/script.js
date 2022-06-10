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

$('.list-of-links .pages').click(function(event){
    let targetLink = $(event.target)
    console.log(event.target)
    if(targetLink.hasClass("project-page")){
        $(this).addClass("active-link")
        $(".about-me-link").removeClass("active-link")
        $(".contact-link").removeClass("active-link")
    } else if(targetLink.hasClass("about-me-page")){
        $(this).addClass("active-link")
        $(".project-link").removeClass("active-link")
        $(".contact-link").removeClass("active-link")
    } else {
        $(this).addClass("active-link")
        $(".project-link").removeClass("active-link")
        $(".about-me-link").removeClass("active-link")
    }
})