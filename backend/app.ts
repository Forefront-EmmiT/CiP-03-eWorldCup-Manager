import express from "express";
import cors from "cors";

const app = express();
app.set("json spaces", 2);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening on PORT:", PORT);
});


// app.get('/rounds/:n', (req, res) => {
//     res.json(roundRobin(n))
// });

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

