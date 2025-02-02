// main file
import { app } from "./app.js";
import { connectDB } from "./config/db.js";

connectDB()
  .then(() => {
    app.listen(8080, () => {
      console.log(`Server is running at port ${8080}`);
    });
  })
  .catch((error) => {
    console.error("Error, couldn't start the server", error);
  });
