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


// $(".us-language").on('click', () => {
//     console.log(location.pathname.split("/"));
//     console.log(newSlug("en-us")); 
//     function newSlug(item) { 
//         return "/" + item + location.pathname; 
//     }
// });

// $(".us-language").on('click', (event) => {
//     event.preventDefault(); // Prevent the default behavior of the link
//     const currentPath = location.pathname;
//     const newSlug = "/en-us" + currentPath;
//     window.location.href = "https://pabau.com" + newSlug;
// });

$(".us-language").on('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    const pathSegments = location.pathname.split('/');
    pathSegments.shift(); // Remove the first segment (usually "pabau.com")
    const newPath = "/en-us" + pathSegments.join('/');
    window.location.href = "https://pabau.com" + newPath;
});

