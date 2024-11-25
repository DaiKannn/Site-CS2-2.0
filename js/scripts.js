// Path to the JSON file
const videosJSON = "./videos.json";

// Global variable to store loaded videos
let currentVideos = [];

// Function to load videos dynamically
async function loadVideos(map, type, side) {
    try {
        // Fetch the videos data
        const response = await fetch(videosJSON);
        const data = await response.json();

        // Get the specific videos for the map, type, and side
        currentVideos = data[map]?.[type]?.[side] || [];
        if (currentVideos.length === 0) {
            console.error("No videos found for this selection.");
            document.getElementById("videos-container").innerHTML =
                "<p>Aucune vidéo trouvée pour cette configuration.</p>";
            return;
        }

        // Display the videos
        displayVideos(currentVideos);
    } catch (error) {
        console.error("Error loading videos:", error);
        document.getElementById("videos-container").innerHTML =
            "<p>Erreur lors du chargement des vidéos.</p>";
    }
}

// Function to display videos
function displayVideos(videos) {
    const container = document.getElementById("videos-container");
    container.innerHTML = ""; // Clear existing content

    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";

        const title = document.createElement("h3");
        title.textContent = video.title;

        const videoElement = document.createElement("video");
        videoElement.src = video.url;
        videoElement.controls = true;

        videoCard.appendChild(title);
        videoCard.appendChild(videoElement);
        container.appendChild(videoCard);
    });
}

// Function to filter videos based on search input
function filterVideos() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredVideos = currentVideos.filter(video =>
        video.title.toLowerCase().includes(query)
    );
    displayVideos(filteredVideos);
}

// Event listeners for side switching
document.getElementById("btn-t-side").addEventListener("click", () => {
    loadVideos("mirage", "smokes", "T");
});

document.getElementById("btn-ct-side").addEventListener("click", () => {
    loadVideos("mirage", "smokes", "CT");
});

// Event listener for the search bar
document.getElementById("search-bar").addEventListener("input", filterVideos);

// Initial load for T side (default)
window.onload = () => {
    loadVideos("mirage", "smokes", "T");
};
