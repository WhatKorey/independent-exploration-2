// Number of seconds that have passed
let time = 0;

// Reference to the <span> element containing the number of seconds
let counterElement = document.getElementById("time");

// Function to update the counter every second
function updateCounter() {
    // Increment the time variable by 1
    time++;
    // Update the text content of the counterElement to reflect the new time
    counterElement.textContent = time;
}

// Use setInterval to call updateCounter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);
//I asked gpt for questions and add comments to better understand what each line of code do.