"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const MyUserRoute_1 = __importDefault(require("./routes/MyUserRoute"));
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/health", (req, res) => {
    res.send({ message: "Health OK!" });
});
// /api/my/user
app.use("/api/my/user", MyUserRoute_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
