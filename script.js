
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
    var svgElement = $(".icon");
  
    // Check if the URL contains "/fr"
    if (currentURL.includes("/fr")) {
      // Update the text of elements with class "language-description"
      $(".language-description").text("You're on our French website. Change your region to see information and pricing for another location.");
      svgElement.html('<svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 130 120" enable-background="new 0 0 130 120" xml:space="preserve"><g id="Infos"><rect id="BG" x="-650" y="-740" fill="#D8D8D8" width="70" height="70"/></g><g id="Others"></g><g id="Europe"><g id="Row_5"></g><g id="Row_4"></g><g id="Row_3"></g><g id="Row_2"><g><rect x="87" fill="#DB3A49" width="43" height="120"/><rect x="43" fill="#FFFFFF" width="44" height="120"/><rect fill="#2A66B7" width="43" height="120"/></g></g><g id="Row_1"></g></g></svg>');
    }
    else if (currentURL.includes("/en-us")) {
        svgElement.html('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 130 120" enable-background="new 0 0 130 120" xml:space="preserve"><g id="Infos"><rect id="BG" x="-200" y="-1350" fill="#D8D8D8" width="2180" height="1700"/></g><g id="Others"><g><rect y="0" fill="#DC4437" width="130" height="13.3"/><rect y="26.7" fill="#DC4437" width="130" height="13.3"/> <rect y="80" fill="#DC4437" width="130" height="13.3"/><rect y="106.7" fill="#DC4437" width="130" height="13.3"/><rect y="53.3" fill="#DC4437" width="130" height="13.3"/><rect y="13.3" fill="#FFFFFF" width="130" height="13.3"/><rect y="40" fill="#FFFFFF" width="130" height="13.3"/><rect y="93.3" fill="#FFFFFF" width="130" height="13.3"/><rect y="66.7" fill="#FFFFFF" width="130" height="13.3"/><rect y="0" fill="#2A66B7" width="70" height="66.7"/><polygon fill="#FFFFFF" points="13.5,4 15.8,8.9 21,9.7 17.2,13.6 18.1,19 13.5,16.4 8.9,19 9.8,13.6 6,9.7 11.2,8.9 		"/><polygon fill="#FFFFFF" points="34,4 36.3,8.9 41.5,9.7 37.8,13.6 38.6,19 34,16.4 29.4,19 30.2,13.6 26.5,9.7 31.7,8.9 		"/> <polygon fill="#FFFFFF" points="54.5,4 56.8,8.9 62,9.7 58.2,13.6 59.1,19 54.5,16.4 49.9,19 50.8,13.6 47,9.7 52.2,8.9 		"/> <polygon fill="#FFFFFF" points="24,24 26.3,28.9 31.5,29.7 27.8,33.6 28.6,39 24,36.4 19.4,39 20.2,33.6 16.5,29.7 21.7,28.9"/><polygon fill="#FFFFFF" points="44.5,24 46.8,28.9 52,29.7 48.2,33.6 49.1,39 44.5,36.4 39.9,39 40.8,33.6 37,29.7 42.2,28.9"/><polygon fill="#FFFFFF" points="13.5,45.2 15.8,50.1 21,50.9 17.2,54.7 18.1,60.2 13.5,57.6 8.9,60.2 9.8,54.7 6,50.9 11.2,50.1"/><polygon fill="#FFFFFF" points="34,45.2 36.3,50.1 41.5,50.9 37.8,54.7 38.6,60.2 34,57.6 29.4,60.2 30.2,54.7 26.5,50.9 31.7,50.1 		"/><polygon fill="#FFFFFF" points="54.5,45.2 56.8,50.1 62,50.9 58.2,54.7 59.1,60.2 54.5,57.6 49.9,60.2 50.8,54.7 47,50.9 52.2,50.1 		"/></g></g><g id="Europe"><g id="Row_5"></g><g id="Row_4"></g><g id="Row_3"></g><g id="Row_2"></g><g id="Row_1"></g></g></svg>');
        $(".language-description").text("You're on our United States website. Change your region to see information and pricing for another location.");
    }
    else{
        svgElement.html('<svg width="70px" height="70px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="YOUR_FRENCH_PATH_DATA_HERE" fill="#FF0000" /></svg>');
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