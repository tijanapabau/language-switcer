
$("#change-language").on('click', () => {

    $(".language-overlay").css("display", "block");

    $(".change-language-toggle").css("bottom", "0px");
});



$(".close-btn").on('click', () => {
    $(".language-overlay").css("display", "none");

    $(".change-language-toggle").css("bottom", "-500px");
});




$(".language-overlay").on('click', () => {
    $(".language-overlay").css("display", "none");

    $(".change-language-toggle").css("bottom", "-500px");
})


function updateLanguageDescription() {
    // Get the current URL
    var currentURL = window.location.href;
    var svgElement = $(".icon-svg");
  
    // Check if the URL contains "/fr"
    if (currentURL.includes("/fr")) {
        // Replace the SVG data with the French version
        svgElement.html('<svg width="70px" height="70px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="YOUR_FRENCH_PATH_DATA_HERE" fill="#FF0000" /></svg>');
      
        // Update the language description text
        $(".language-description").text("You're on our French website. Change your region to see information and pricing for another location.");
    }
    else if (currentURL.includes("/en-us")) {
        // Replace the SVG data with the English version
        svgElement.html('<svg width="70px" height="70px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="YOUR_ENGLISH_PATH_DATA_HERE" fill="#FF0000" /></svg>');
      
        // Update the language description text
        $(".language-description").text("You're on our United States website. Change your region to see information and pricing for another location.");
    }
    else {
        // Replace the SVG data with the default version
        svgElement.html('<svg width="70px" height="70px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="YOUR_DEFAULT_PATH_DATA_HERE" fill="#FF0000" /></svg>');
      
        // Update the language description text for the default language
        $(".language-description").text("You're on our Global website. Change your region to see information and pricing for another location.");
    }
}

// Call the function to update the language description when the page loads
$(document).ready(function() {
    updateLanguageDescription();
});
  

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



// $(".us-language").on('click', (event) => {
//     event.preventDefault(); // Prevent the default behavior of the link
//     const pathSegments = location.pathname.split('/');
//     pathSegments.shift(); // Remove the first segment (usually "pabau.com")
//     const newPath = "/en-us" + pathSegments.join('/');
//     window.location.href = "https://pabau.com" + newPath;
// });



// // Function to redirect to the /en-us/ version of the current page
// function redirectToEnUsVersion() {
//     // Get the current URL
//     var currentUrl = window.location.href;
//     // Check if the current URL already contains "/en-us/"
//     if (currentUrl.indexOf("/en-us/") === -1) {
//         // Split the URL into parts
//         var urlParts = currentUrl.split("/");
//         // Find the index of the first part after the domain
//         var startIndex = 3; // Assuming the domain is the first part (test.com)
//         // Insert "en-us" right after the domain
//         urlParts.splice(startIndex, 0, "en-us");
//         // Construct the new URL
//         var newUrl = urlParts.join("/");
//         // Redirect to the new URL
//         window.location.href = newUrl;
//     }
// }
// // Add click event listener to the button
// $(".us-language").click(redirectToEnUsVersion);


function redirectOnClick(event) {
    event.preventDefault(); // Prevent the default link behavior
    const currentUrl = window.location.href; // Get the current URL
    const baseUrl = 'https://pabau.com'; // Base URL
    const targetUrl = baseUrl + '/en-us' + window.location.pathname; // Construct the new URL
    window.location.href = targetUrl; // Redirect to the new URL
}

// Add a click event listener to elements with the class 'us-language'
const usLanguageLinks = document.querySelectorAll('.us-language');
usLanguageLinks.forEach(link => {
    link.addEventListener('click', redirectOnClick);
});

function redirectOnClick_2(event) {
    event.preventDefault(); // Prevent the default link behavior
    const currentUrl = window.location.href; // Get the current URL
    const baseUrl = 'https://pabau.com'; // Base URL
    const targetUrl = baseUrl + '/fr' + window.location.pathname; // Construct the new URL
    window.location.href = targetUrl; // Redirect to the new URL
}

// Add a click event listener to elements with the class 'us-language'
const frLanguageLinks = document.querySelectorAll('.fr-language');
usLanguageLinks.forEach(link => {
    link.addEventListener('click', redirectOnClick);
});