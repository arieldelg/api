import dotenv from "dotenv";
dotenv.config();
module.exports = {
  API_URL: process.env.API_URL,
  port: process.env.PORT,
};
