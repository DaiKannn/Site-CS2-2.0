document.addEventListener("DOMContentLoaded", () => {
    const btnT = document.getElementById("btn-t-side");
    const btnCT = document.getElementById("btn-ct-side");
    const videosContainer = document.getElementById("videos-container");
    const searchBar = document.getElementById("search-bar");

    // Détection dynamique de la map en fonction de l'ID du body ou d'un attribut HTML
    const currentMap = document.body.dataset.map || "Dust2"; // Ex. : ajoutez data-map="Inferno" dans la balise <body>

    // Données des vidéos
    const videosData = {
        AncientSmoke: {
            T: [
                { title: "Long Smoke", link: "https://www.youtube.com/embed/EXAMPLE1" },
                { title: "Cat Smoke", link: "https://www.youtube.com/embed/EXAMPLE2" },
            ],
            CT: [
                { title: "B Tunnel Smoke", link: "https://www.youtube.com/embed/EXAMPLE3" },
                { title: "Mid Doors Smoke", link: "https://www.youtube.com/embed/EXAMPLE4" },
            ],
        },
        AnubisSmoke: {
            T: [
                { title: "Test6 Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "Test6 Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "Test6 Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Test6 Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },
        // Ajoutez d'autres maps ici
        Dust2Smoke: {
            T: [
                { title: "Test5 Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "Test5 Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "Test5 Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Test5 Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        InfernoSmoke: {
            T: [
                { title: "Banana Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "CT Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "A Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Library Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        MirageSmoke: {
            T: [
                { title: "Test4 Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "Test4 Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "Test4 Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Test4 Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        NukeSmoke: {
            T: [
                { title: "Outside Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "Test3 Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "Test3 Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Test3 Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        TrainSmoke: {
            T: [
                { title: "Test2 Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "Test2 Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "Test2 Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Test2 Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        VertigoSmoke: {
            T: [
                { title: "Ramp Smoke", link: "https://www.youtube.com/embed/EXAMPLE5" },
                { title: "Test Spawn Smoke", link: "https://www.youtube.com/embed/EXAMPLE6" },
            ],
            CT: [
                { title: "Test Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Test Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        AncientMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },
        AnubisMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },
        // Ajoutez d'autres maps ici
        Dust2Molotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        InfernoMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        MirageMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        NukeMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        TrainMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        VertigoMolotov: {
            T: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        AncientFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },
        AnubisFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },
        // Ajoutez d'autres maps ici
        Dust2Flash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

        InfernoFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

        MirageFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

        NukeFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

        TrainFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

        VertigoFlash: {
            T: [
                { title: "A Long Flash", link: "https://www.youtube.com/embed/EXAMPLE21" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

    };

    let activeSide = "T"; // Côté par défaut

    // Fonction pour transformer un lien YouTube en lien embed
    const transformToEmbedLink = (url) => {
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubeRegex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    };

    // Fonction pour créer une carte vidéo
    const createVideoCard = ({ title, link }) => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        videoCard.innerHTML = `
            <iframe src="${link}" frameborder="0" allowfullscreen></iframe>
            <h3>${title}</h3>
        `;
        return videoCard;
    };

    // Charger les vidéos pour le côté actif
    const loadVideos = () => {
        videosContainer.innerHTML = ""; // Réinitialise le conteneur
        const videos = videosData[currentMap][activeSide];
        videos.forEach((video) => {
            videosContainer.appendChild(createVideoCard(video));
        });
    };

    // Mise à jour des styles des boutons
    const updateButtonStyles = () => {
        btnT.classList.toggle("active", activeSide === "T");
        btnCT.classList.toggle("active", activeSide === "CT");
    };

    // Événements pour changer de côté
    btnT.addEventListener("click", () => {
        activeSide = "T";
        loadVideos();
        updateButtonStyles();
    });

    btnCT.addEventListener("click", () => {
        activeSide = "CT";
        loadVideos();
        updateButtonStyles();
    });

    // Barre de recherche dynamique
    searchBar.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        const filteredVideos = videosData[currentMap][activeSide].filter((video) =>
            video.title.toLowerCase().includes(query)
        );
        videosContainer.innerHTML = ""; // Réinitialise
        filteredVideos.forEach((video) => {
            videosContainer.appendChild(createVideoCard(video));
        });
    });

    // Ajouter une nouvelle vidéo
    const setupAddVideoFeature = () => {
        const addVideoButton = document.createElement("button");
        addVideoButton.textContent = "Ajouter une vidéo";
        addVideoButton.className = "btn";
        videosContainer.parentNode.insertBefore(addVideoButton, videosContainer);

        addVideoButton.addEventListener("click", () => {
            const title = prompt("Entrez le titre de la vidéo :").trim();
            const link = prompt("Entrez le lien YouTube de la vidéo :").trim();
            const embedLink = transformToEmbedLink(link);

            if (title && embedLink) {
                videosData[currentMap][activeSide].push({ title, link: embedLink });
                loadVideos();
            } else {
                alert("Le titre et un lien YouTube valide sont obligatoires !");
            }
        });
    };

    // Initialisation
    const initialize = () => {
        loadVideos();
        updateButtonStyles();
        setupAddVideoFeature();
    };

    initialize();
});
