import express, { Router } from "express";
import carRoutes from "./carRoutes";

const router: Router = express.Router();

router.use('/car', carRoutes);

export default router;