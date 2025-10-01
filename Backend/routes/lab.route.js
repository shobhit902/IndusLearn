import express from "express";

const router = express.Router();

router.get("/labs", getLabs);
router.delete("/labs/:id", deleteLab);
router.put("/labs/:id", updateLab);
router.get("/labs/:id", getLabById);

export default router;
