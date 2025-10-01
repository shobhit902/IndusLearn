import express from "express";

const router = express.Router();

router.post("/labs", createLab);
router.post("/labs/ai-generate", aiGenerateLab);
router.get("/labs", getLabs);
router.get("/labs/:id/submissions", getLabById);

export default router;
