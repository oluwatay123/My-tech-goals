/**
 * Updates the current UTC time and day every second.
 */
function updateTime() {
    const now = new Date();
    currentTimeElement.textContent = `Current Time (UTC): ${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
    currentDayElement.textContent = `Current Day: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`;
}

// Select elements for displaying current UTC time and day
const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDayElement = document.querySelector('[data-testid="currentDay"]');

// Update time immediately and then every second
setInterval(updateTime, 1000);
updateTime();

// Display the natural and displayed size of the profile image
const output = document.getElementById("image-size-info");
const image = document.querySelector(".profile-img");

/**
 * Event listener for when the profile image finishes loading.
 * Displays the natural and displayed sizes of the image.
 * @param {Event} event - The 'load' event object.
 */
image.addEventListener("load", (event) => {
    const { naturalWidth, naturalHeight, width, height } = image;
    output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
`;
});