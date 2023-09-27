$("#change-language").on('click', () => {

    $(".language-overlay").css("display", "block");

    $(".change-language-toggle").css("bottom", "0px");

    // $('html, body').css({
    //     overflow: 'hidden',
    //     height: '100%'
    // });
});



$(".close-btn").on('click', () => {
    $(".language-overlay").css("display", "none");

    $(".change-language-toggle").css("bottom", "-500px");


    // $('html, body').css({
    //     overflow: 'auto',
    //     height: 'auto'
    // });
});


$(".language-overlay").on('click', () => {
    $(".language-overlay").css("display", "none");

    $(".change-language-toggle").css("bottom", "-500px");


    // $('html, body').css({
    //     overflow: 'auto',
    //     height: 'auto'
    // });
})

console.log(location.pathname.split("/"));

console.log(newSlug("fr")); 
function newSlug(item) { 
    return "/" + item + location.pathname; 
}