import dotenv from "dotenv";
import { app } from "./app";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
