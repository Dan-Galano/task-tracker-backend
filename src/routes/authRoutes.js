import express from "express";

const router = express.Router();

router.get("/wassup", async (req, res) => {
    return res.status(200).json({ isSuccess: true, message: "Wassup~" });
})

export default router;