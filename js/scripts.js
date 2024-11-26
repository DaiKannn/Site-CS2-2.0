document.addEventListener("DOMContentLoaded", () => {
    const btnT = document.getElementById("btn-t-side");
    const btnCT = document.getElementById("btn-ct-side");
    const videosContainer = document.getElementById("videos-container");
    const searchBar = document.getElementById("search-bar");
    

    let activeSide = "T"; // Par défaut, le côté T est actif
    const videos = {
        T: [
            { title: "Jungle Smoke", link: "https://www.youtube.com/embed/EXAMPLE1" },
            { title: "Connector Smoke", link: "https://www.youtube.com/embed/EXAMPLE2" },
        ],
        CT: [
            { title: "Banana Smoke", link: "https://www.youtube.com/embed/EXAMPLE3" },
            { title: "A Ramp Smoke", link: "https://www.youtube.com/embed/EXAMPLE4" },
        ],
    };

    // Fonction pour transformer un lien YouTube en lien embed
    const transformToEmbedLink = (url) => {
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}`;
        }
        return null; // Retourne null si l'URL n'est pas valide
    };

    // Fonction pour afficher les vidéos du côté actif
    const loadVideos = (side) => {
        videosContainer.innerHTML = ""; // Nettoie les vidéos existantes
        videos[side].forEach((video) => {
            const videoCard = document.createElement("div");
            videoCard.className = "video-card";
            videoCard.innerHTML = `
                <iframe src="${video.link}" frameborder="0" allowfullscreen></iframe>
                <h3>${video.title}</h3>
            `;
            videosContainer.appendChild(videoCard);
        });
    };

    // Mise à jour du style des boutons
    const updateButtonStyles = () => {
        btnT.classList.toggle("active", activeSide === "T");
        btnCT.classList.toggle("active", activeSide === "CT");
    };

    // Écouteurs d'événements pour les boutons
    btnT.addEventListener("click", () => {
        activeSide = "T";
        loadVideos(activeSide);
        updateButtonStyles();
    });

    btnCT.addEventListener("click", () => {
        activeSide = "CT";
        loadVideos(activeSide);
        updateButtonStyles();
    });

    // Barre de recherche dynamique
    searchBar.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        const filteredVideos = videos[activeSide].filter((video) =>
            video.title.toLowerCase().includes(query)
        );
        videosContainer.innerHTML = "";
        filteredVideos.forEach((video) => {
            const videoCard = document.createElement("div");
            videoCard.className = "video-card";
            videoCard.innerHTML = `
                <iframe src="${video.link}" frameborder="0" allowfullscreen></iframe>
                <h3>${video.title}</h3>
            `;
            videosContainer.appendChild(videoCard);
        });
    });

    // Charger les vidéos du côté actif au chargement de la page
    loadVideos(activeSide);
    updateButtonStyles();

    // Ajout d'une vidéo par l'utilisateur
    const addVideoButton = document.createElement("button");
    addVideoButton.textContent = "Ajouter une vidéo";
    addVideoButton.className = "btn";
    videosContainer.parentNode.insertBefore(addVideoButton, videosContainer);

    addVideoButton.addEventListener("click", () => {
        const title = prompt("Entrez le titre de la vidéo :");
        const link = prompt("Entrez le lien YouTube de la vidéo :");
        const embedLink = transformToEmbedLink(link);

        if (title && embedLink) {
            videos[activeSide].push({ title, link: embedLink });
            loadVideos(activeSide);
        } else {
            alert("Le titre et un lien YouTube valide sont obligatoires !");
        }
    });
});
