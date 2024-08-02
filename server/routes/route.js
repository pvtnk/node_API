
import express from "express";
import { Create, Delete, Get, Get_one, Update } from "../controllers/controller.js";
const router = express.Router();

router.post("/create", Create);
router.get("/get", Get);
router.get("/getone",Get_one);
router.put("/put",Update);
router.delete("/delete",Delete);
export default router;
