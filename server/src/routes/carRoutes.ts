import express, { Router } from "express";
import { createCarHandler, updateCarByIdHandler, deleteCarByIdHandler, 
    getAllCarsHandler, getCarByIdHandler, getSortedCarsHandler } from "../controllers/carControllers";

const router: Router = express.Router();

router.get('/get/:id', getCarByIdHandler);
router.get('/all', getAllCarsHandler);
router.get('/sort', getSortedCarsHandler);
router.post('/create', createCarHandler);
router.put('/update/:id', updateCarByIdHandler);
router.delete('/delete/:id', deleteCarByIdHandler);

export default router;