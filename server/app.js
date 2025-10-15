const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

const { maxRounds } = require('./utils/maxRounds.ts');
const { error } = require('console');

app.set('json spaces', 2);

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const playersData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'players.json'), 'utf8')
);

app.get('/', (req, res) => {
    res.json({ message: "hello world"})
});

app.get('/players', (req, res) => {
    res.json({
        total: playersData.length,
        players: playersData
    })
});

// app.get('/rounds/:n', (req, res) => {
//     res.json(roundRobin(n))
// });

app.get('/rounds/max', (req, res) => {
    const n = parseInt(req.query.n);

    if(!n || isNaN(n) || n < 2) {
        return res.status(400).json({
            error: 'Parameter n is required and must be a number >= 2'
        });
    }

    try {
        const result = maxRounds(n);
        res.json({
            maxRounds: result,
            players: n
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// app.get('/match/remaining?n=&D=', (req, res) => {
//     res.json(playersData)
// });

// app.get('/match?n=&i=&d=', (req, res) => {
//     res.json(playersData)
// });

// app.get('/player/:i/schedule', (req, res) => {
//     res.json(playersData)
// });

// app.get('/player/:i/round/:d', (req, res) => {
//     res.json(playersData)
// });

app.listen(PORT, () => {
    console.log("Server listening on PORT:", PORT)
});
