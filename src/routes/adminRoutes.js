import express from "express";

import protect from "../middleware/protect.js";

import authorize from "../middleware/authorize.js";

const router = express.Router();

router.get("/dashboard", protect, authorize("admin"), (req, res) => {
  res.json({
    message: "Welcome Admin Dashboard",
  });
});

export default router;
