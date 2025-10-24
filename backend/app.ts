import express from "express";
import cors from "cors";
import { errorHandler } from "./src/middlewares/errorHandler";
import playerRoutes from "./src/routes/playerRoutes";

const app = express();
app.set("json spaces", 2);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.use(cors());

app.use("/", playerRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening on PORT:", PORT);
});

// app.get('/player/:i/round/:d', (req, res) => {
//     res.json(playersData)
// });
