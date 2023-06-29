// Get the width and height of the browser window
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Get the HTML element to display the window dimensions
var windowDimensionsElement = document.getElementById('windowDimensions');

// Set the window dimensions message
windowDimensionsElement.textContent = "Window Width: " + windowWidth + "px, Window Height: " + windowHeight + "px";
