// $("h1").click(function(){
//     alert("h1 has been clicked")
// })

$('.buttons' > '.choose-projects').each(function(e){
    $(e.target).click(function(){
        console.log("This has been clicked");
    })
})