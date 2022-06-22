import express from "express";
import { searchQueryName } from "../controllers/search/queryName.js";

const apiSearch = express.Router();

apiSearch.get("/search", searchQueryName);

export default apiSearch;
