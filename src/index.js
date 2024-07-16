import Express from "express";
import bodyParser from "body-parser";
import { mySqlDbConnection } from "./database";
import { productRouter } from "./api/Products/router";

(async function main(){
  const app = Express();

  app.use(bodyParser.json());

  const router = Express.Router();

  router.use("/", productRouter);

  await mySqlDbConnection();

  app.listen(COMMON_CONSTANT.PORT, () => {
    console.log(
      `Server running at port http://localhost:8000`
    );
  });
})().catch((err) => {
  console.log("Error starting Server $", err.message);
});

