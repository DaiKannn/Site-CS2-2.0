document.addEventListener("DOMContentLoaded", () => {
    const btnT = document.getElementById("btn-t-side");
    const btnCT = document.getElementById("btn-ct-side");
    const videosContainer = document.getElementById("videos-container");
    const searchBar = document.getElementById("search-bar");

    // Détection dynamique de la map
    const currentMap = document.body.dataset.map || "Dust2"; // Ex. : ajoutez data-map="Inferno" dans la balise <body>

    // Données des vidéos avec des liens YouTube
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
                { title: "Smoke Coffin", link: "https://www.youtube.com/watch?v=-JMG9iX2MCs" },
                { title: "Smoke Coffin 2", link: "https://www.youtube.com/watch?v=Bs_RfGSLibM" },
                { title: "Smoke CT", link: "https://www.youtube.com/watch?v=oDHo5AZ24Rk" },
                { title: "Smoke CT 2", link: "https://www.youtube.com/watch?v=_Ajromt50Kg" },
                { title: "Smoke Librairie", link: "https://www.youtube.com/watch?v=hCF1bpObfyU" },
                { title: "Smoke Librairie 2", link: "https://www.youtube.com/watch?v=sAEddB8Ss1A" },
                { title: "Smoke Arche", link: "https://www.youtube.com/watch?v=dPnOSffRFXU" },
                { title: "Smoke CT", link: "https://www.youtube.com/watch?v=oDHo5AZ24Rk" },
                { title: "Smoke Long", link: "https://www.youtube.com/watch?v=brdi7e9LpIQ" },
                { title: "Smoke Long 2", link: "https://www.youtube.com/watch?v=abka0dkraAQ" },
                { title: "Smoke Long Profonde", link: "https://www.youtube.com/watch?v=jR6LXN6g3jA" },
                { title: "Smoke Plaine", link: "https://www.youtube.com/watch?v=VDrZf3hlc90" },
                { title: "Smoke Plaine 2", link: "https://www.youtube.com/watch?v=D5FyOx2-6hM" },
                { title: "Smoke Plaine 3", link: "https://www.youtube.com/watch?v=jpbdajMXVTI" },
                { title: "Smoke Lurk Apps", link: "https://www.youtube.com/watch?v=LeS58n_ueFY" },
            ],
            CT: [
                { title: "A Site Smoke", link: "https://www.youtube.com/embed/EXAMPLE7" },
                { title: "Library Smoke", link: "https://www.youtube.com/embed/EXAMPLE8" },
            ],
        },

        MirageSmoke: {
            T: [
                { title: "Smoke Bas-Stairs", link: "https://www.youtube.com/watch?v=I2bhzCkoe-w" },
                { title: "Smoke Connector", link: "https://www.youtube.com/watch?v=jgkMfKjcIto" },
                { title: "Smoke CT", link: "https://www.youtube.com/watch?v=PrfCJvigGaY" },
                { title: "Smoke CT 2", link: "https://www.youtube.com/watch?v=x7j1ZjI23KI" },
                { title: "Smoke Stairs", link: "https://www.youtube.com/watch?v=eEA2IoVlxgA" },
                { title: "Smoke Windows", link: "https://www.youtube.com/watch?v=cTAzQDmK4eY" },
                { title: "Smoke Stairs&Jgl", link: "https://www.youtube.com/watch?v=k6dmSY6WNB8" },
            ],
            CT: [
                { title: "Smoke Ramp", link: "https://www.youtube.com/watch?v=tc-Uh-n0g_E" },
                { title: "Smoke Ramp 2", link: "https://www.youtube.com/watch?v=iccR2d8z7ZQ" },
            ],
        },

        NukeSmoke: {
            T: [
                { title: "Mur de smoke solo", link: "https://www.youtube.com/watch?v=cqXXA3MZ67k" },
                { title: "Mur de smoke solo 2", link: "https://www.youtube.com/watch?v=IoOLsx6n4nk" },
                { title: "Smoke outside 2", link: "https://www.youtube.com/watch?v=nRLpWVSDr80" },
                { title: "Smoke outside 3", link: "https://www.youtube.com/watch?v=g8mY_qVlRgA" },
                { title: "Smoke lurk porte", link: "https://www.youtube.com/watch?v=XL90O01QmtY" },
                { title: "Smoke Vestiaires", link: "https://www.youtube.com/watch?v=_N9O9-T2DU4" },
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
                { title: "Molo C1", link: "https://www.youtube.com/watch?v=cagpmU74Yi8" },
                { title: "Molo C3", link: "https://www.youtube.com/watch?v=qIgTsaQqUjg" },
                { title: "Molo C3 2", link: "https://www.youtube.com/watch?v=MrobKxoPM1M" },
                { title: "Molo Dark", link: "https://www.youtube.com/watch?v=Iv5M5xQChgE" },
                { title: "Molo Fallen", link: "https://www.youtube.com/watch?v=1CnawmBHnmE" },
                { title: "Molo Pitt", link: "https://www.youtube.com/watch?v=dIbH1AjARcg" },
                { title: "Molo SandBag", link: "https://www.youtube.com/watch?v=s3PL3Gtop24" },
            ],
            CT: [
                { title: "Molo Backsite A", link: "https://www.youtube.com/watch?v=txI9i5xaOks" },
                { title: "Molo fond banane", link: "https://www.youtube.com/watch?v=0AvucD0MF8E" },
            ],
        },

        MirageMolotov: {
            T: [
                { title: "Molo Sandwitch", link: "https://www.youtube.com/watch?v=NI8nnqZOQJk" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
            CT: [
                { title: "Car Molotov", link: "https://www.youtube.com/embed/EXAMPLE19" },
                { title: "B Backsite Molotov", link: "https://www.youtube.com/embed/EXAMPLE20" },
            ],
        },

        NukeMolotov: {
            T: [
                { title: "Molo Back site A", link: "https://www.youtube.com/watch?v=ywsTDiGD0iQ" },
                { title: "Molo Hut", link: "https://www.youtube.com/watch?v=bs_qZOn5UXI" },
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
                { title: "Flash T", link: "https://www.youtube.com/watch?v=bIbhBHCvfLU" },
                { title: "Flash Muret", link: "https://www.youtube.com/watch?v=0oyKpuEAeBI" },
                { title: "Flash Site", link: "https://www.youtube.com/watch?v=VjXLwvK-7qE" },
                { title: "Flash Muret", link: "https://www.youtube.com/watch?v=0oyKpuEAeBI" },
            ],
            CT: [
                { title: "Flash Retake Car", link: "https://www.youtube.com/watch?v=KW7K93tTK5c" },
                { title: "Flash C1", link: "https://www.youtube.com/watch?v=h3U7PkjyaqI" },
            ],
        },

        MirageFlash: {
            T: [
                { title: "Flash Antenne", link: "https://www.youtube.com/watch?v=PdfahccvGw0" },
                { title: "Mid to B Flash", link: "https://www.youtube.com/embed/EXAMPLE22" },
            ],
            CT: [
                { title: "Mid Flash", link: "https://www.youtube.com/embed/EXAMPLE27" },
                { title: "A Ramp Flash", link: "https://www.youtube.com/embed/EXAMPLE28" },
            ],
        },

        NukeFlash: {
            T: [
                { title: "Flash INT", link: "https://www.youtube.com/watch?v=sCzsHWmAmhM" },
                { title: "Flash Ramp", link: "https://www.youtube.com/watch?v=WO2rSEXUA1U" },
            ],
            CT: [
                { title: "Flash Retake", link: "https://www.youtube.com/watch?v=1iGWXEjijkM" },
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

    // Fonction pour convertir un lien YouTube en lien embed
    const convertToEmbedLink = (link) => {
        const url = new URL(link);
        if (url.hostname === "www.youtube.com" && url.searchParams.has("v")) {
            return `https://www.youtube.com/embed/${url.searchParams.get("v")}`;
        }
        return link; // Retourne le lien original si ce n'est pas un lien YouTube valide
    };

    // Fonction pour créer une carte vidéo
    const createVideoCard = ({ title, link }) => {
        const embedLink = convertToEmbedLink(link);
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        videoCard.innerHTML = `
            <iframe src="${embedLink}" frameborder="0" allowfullscreen></iframe>
            <h3>${title}</h3>
        `;
        return videoCard;
    };

    // Charger les vidéos pour le côté actif
    const loadVideos = () => {
        videosContainer.innerHTML = ""; // Réinitialise le conteneur
        const videos = videosData[currentMap]?.[activeSide] || [];
        videos.forEach((video) => {
            videosContainer.appendChild(createVideoCard(video));
        });
    };

    // Mise à jour des styles des boutons
    const updateButtonStyles = () => {
        btnT.classList.toggle("active", activeSide === "T");
        btnCT.classList.toggle("active", activeSide === "CT");
    };


    // Gestion des événements de clic
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
        const filteredVideos = videosData[currentMap]?.[activeSide]?.filter((video) =>
            video.title.toLowerCase().includes(query)
        ) || [];
        videosContainer.innerHTML = ""; // Réinitialise
        filteredVideos.forEach((video) => {
            videosContainer.appendChild(createVideoCard(video));
        });
    });

    // Initialisation
    const initialize = () => {
        document.body.classList.add("default-theme"); // Thème par défaut au chargement
        loadVideos();
        updateButtonStyles();
    };

    initialize();
});
