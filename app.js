import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { Model } from "objection";
import KnexConfig from "./databases/knex.js";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import apiProducts from "./app/http/apis/products.api.js";
import apiCategory from "./app/http/apis/category.api.js";
import apiUser from "./app/http/apis/user.api.js";
import apiUserProperty from "./app/http/apis/userProperty.api.js";
import apiComment from "./app/http/apis/comment.api.js";
import apiAuth from "./app/http/apis/auth.api.js";
import apiSearch from "./app/http/apis/search.api.js";
import apiOrder from "./app/http/apis/order.api.js";

Model.knex(KnexConfig);
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", apiProducts);
app.use("/api", apiCategory);
app.use("/api", apiUser);
app.use("/api", apiUserProperty);
app.use("/api", apiAuth);
app.use("/api", apiSearch);
app.use("/api", apiComment);
app.use("/api", apiOrder);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
