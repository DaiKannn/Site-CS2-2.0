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

    // Fonction pour mettre à jour le thème de la page
const updatePageTheme = () => {
    document.body.classList.remove("default-theme", "t-theme", "ct-theme");

    if (activeSide === "CT") {
        document.body.classList.add("ct-theme");
    } else if (activeSide === "T") {
        document.body.classList.add("t-theme");
    }
};

// Ajoutez l'appel à updatePageTheme dans les événements de clic des boutons
btnT.addEventListener("click", () => {
    activeSide = "T";
    loadVideos();
    updateButtonStyles();
    updatePageTheme();
    displayEasterEgg("T"); // Afficher l'easter egg pour CT
});

btnCT.addEventListener("click", () => {
    activeSide = "CT";
    loadVideos();
    updateButtonStyles();
    updatePageTheme();
    displayEasterEgg("CT"); // Afficher l'easter egg pour CT
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

    const playerPhotos = {
        T: [
            { name: "Player T1", photo: "../../images/mirage_2.webp" },
            { name: "Player T2", photo: "../../images/ancient_2.webp" },
            { name: "Player T3", photo: "../../images/inferno_2.webp" },
        ],
        CT: [
            { name: "Player CT1", photo: "../../images/dust2_2.webp" },
            { name: "Player CT2", photo: "../../images/train_2.webp" },
            { name: "Player CT3", photo: "../../images/vertigo_2.webp" },
        ],
    };

    // Fonction pour générer une position aléatoire dans les limites de la fenêtre
const getRandomPosition = (element) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    const randomX = Math.random() * (windowWidth - elementWidth);
    const randomY = Math.random() * (windowHeight - elementHeight);

    return { x: randomX, y: randomY };
};

// Fonction pour choisir un coin aléatoire et positionner l'easter egg
const getRandomCornerPosition = () => {
    // Choix aléatoire parmi les coins : "top-left", "top-right", "bottom-left", "bottom-right"
    const corners = ["top-left", "top-right", "bottom-left", "bottom-right"];
    const randomCorner = corners[Math.floor(Math.random() * corners.length)];

    // Coordonnées spécifiques pour chaque coin
    switch (randomCorner) {
        case "top-left":
            return { x: 10, y: 10 }; // Coin supérieur gauche
        case "top-right":
            return { x: window.innerWidth - 160, y: 10 }; // Coin supérieur droit
        case "bottom-left":
            return { x: 10, y: window.innerHeight - 200 }; // Coin inférieur gauche
        case "bottom-right":
            return { x: window.innerWidth - 160, y: window.innerHeight - 200 }; // Coin inférieur droit
        default:
            return { x: 10, y: 10 }; // Par défaut, coin supérieur gauche
    }
};

// Mise à jour de la fonction displayEasterEgg
const displayEasterEgg = (side) => {
    // Sélection d'une image aléatoire pour le côté donné (T ou CT)
    const randomIndex = Math.floor(Math.random() * playerPhotos[side].length);
    const selectedPhoto = playerPhotos[side][randomIndex];

    // Création ou sélection de l'élément pour l'easter egg
    let easterEggElement = document.getElementById("easter-egg");
    if (!easterEggElement) {
        easterEggElement = document.createElement("div");
        easterEggElement.id = "easter-egg";
        easterEggElement.style.position = "absolute";
        document.body.appendChild(easterEggElement);
    }

    // Mise à jour du contenu et du style
    easterEggElement.innerHTML = `
        <img src="${selectedPhoto.photo}" alt="${selectedPhoto.name}" style="width: 150px; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);">
        <p style="text-align: center; color: white; font-size: 14px; margin: 5px 0 0;">${selectedPhoto.name}</p>
    `;
    easterEggElement.style.zIndex = 1000;

    // Positionnement dans un coin aléatoire
    const { x, y } = getRandomCornerPosition();
    easterEggElement.style.left = `${x}px`;
    easterEggElement.style.top = `${y}px`;

    // Ajout d'une animation d'apparition
    easterEggElement.style.transition = "opacity 0.5s ease";
    easterEggElement.style.opacity = "0";
    setTimeout(() => {
        easterEggElement.style.opacity = "1";
    }, 10);
};


    const initialize = () => {
        document.body.classList.add("default-theme"); // Thème par défaut au chargement
        loadVideos();
        updateButtonStyles();
        setupAddVideoFeature();
    };


    initialize();
});