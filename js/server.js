const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Pour gérer les CORS
app.use(bodyParser.json()); // Pour traiter les requêtes JSON

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/videosDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connecté à MongoDB"))
    .catch((error) => console.error("Erreur de connexion MongoDB", error));

// server.js (Backend)

const videoSchema = new mongoose.Schema({
    title: String,
    link: String,
    side: { type: String, enum: ['T', 'CT'], required: true },
    map: { type: String, required: true },  // Ajout du champ 'map'
});

const Video = mongoose.model('Video', videoSchema);

// Vidéos statiques (pré-définies), ajout d'une carte pour chaque vidéo
const staticVideos = {
    mirage: [
        { title: "Smoke Window", link: "https://www.youtube.com/embed/example1", side: "T", map: "mirage" },
        { title: "Smoke Jungle", link: "https://www.youtube.com/embed/example2", side: "T", map: "mirage" },
        { title: "Smoke Top Mid", link: "https://www.youtube.com/embed/example3", side: "CT", map: "mirage" },
    ],
    dust2: [
        { title: "A Site Smoke", link: "https://www.youtube.com/embed/example4", side: "T", map: "dust2" },
        { title: "Mid Control", link: "https://www.youtube.com/embed/example5", side: "CT", map: "dust2" },
    ]
    // Ajoutez ici d'autres cartes avec leurs vidéos...
};

// Insérer les vidéos statiques pour chaque carte
async function insertStaticVideos() {
    for (const map in staticVideos) {
        const existingVideos = await Video.countDocuments({ map });
        if (existingVideos === 0) {
            await Video.insertMany(staticVideos[map]);
        }
    }
}

insertStaticVideos();


// Récupérer toutes les vidéos pour une carte spécifique
app.get('/videos', async (req, res) => {
    const { side, map } = req.query;
    if (!side || !map) {
        return res.status(400).json({ error: 'Side and map are required' });
    }

    try {
        const videos = await Video.find({ side, map });
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des vidéos' });
    }
});

// Ajouter une vidéo
app.post('/videos', async (req, res) => {
    const { title, link, side, map } = req.body;

    if (!title || !link || !side || !map) {
        return res.status(400).json({ error: 'Title, link, side, and map are required' });
    }

    try {
        const newVideo = new Video({ title, link, side, map });
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l\'ajout de la vidéo' });
    }
});


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
