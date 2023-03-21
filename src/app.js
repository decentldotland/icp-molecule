import express from "express";
import cors from "cors";

import { isIcpSigner } from "./utils/verifySigner.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/icp-auth/:pubkey/:message/:signature", async (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");

    const { pubkey, message, signature } = req.params;
    const response = await isIcpSigner(message, pubkey, signature);
    res.send(response);
    return;
  } catch (error) {
    res.send({ result: false, address: null });
    return;
  }
});

app.listen(port, async () => {
  console.log(`listening at PORT:${port}`);
});