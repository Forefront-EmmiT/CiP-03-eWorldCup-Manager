"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./src/middlewares/errorHandler");
const playerRoutes_1 = __importDefault(require("./src/routes/playerRoutes"));
const app = (0, express_1.default)();
app.set("json spaces", 2);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(errorHandler_1.errorHandler);
app.use("/", playerRoutes_1.default);
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
//# sourceMappingURL=app.js.map