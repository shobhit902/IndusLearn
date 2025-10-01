import express from "express";

const router = express.Router();

router.get("/labs", getLabs);
router.post("/labs/:id/submit", submitLab);
router.get("/labs/:id/status", getLabStatus);

export default router;
