import express from "express";
import cors from "cors";
import { json } from "body-parser";
// import { generateImage } from "./services/image";
// import { findPath } from "./services/pathfinding";

const app = express();
const PORT = process.env.PORT || 4020;

// Middleware
app.use(cors());
app.use(json());

// Endpoints
// TODO

// Launching
app.listen(PORT, () => {
  console.log(`Iso Headless Service running on port ${PORT}`);
});
