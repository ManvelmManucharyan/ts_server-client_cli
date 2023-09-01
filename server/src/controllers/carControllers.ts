import { Request, Response } from "express";
import { createCar, getCar, updateCarById, deleteCarById, getCars } from "../services/carServices";
import { Car, CarSort, CarUpdate } from "models/carModel";

export async function getAllCarsHandler(req: Request, res: Response) {
    try {
        const cars: Car[] = await getCars({})
        return res.send(cars).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);            
    }
}

export async function getCarByIdHandler(req: Request, res: Response) {
    try {
        const id: string = req.params.id;                
        const car: Car = await getCar({ id })
        if (!car) {
            return res.send("Car not found").status(404);
        }
        return res.send(car).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);            
    }
}

export async function getSortedCarsHandler(req: Request, res: Response) {
    try {
        const sortBy: CarSort = req.query;          
        const cars: Car[] = await getCars(sortBy)
        return res.send(cars).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);            
    }
}

export async function createCarHandler(req: Request, res: Response) {
    try {
        const carInput: Car = req.body;
        const car: Car = await getCar({ brand: carInput.brand, model: carInput.model, year: carInput.year })
        if (car) {
            return res.send("This car already registered").status(400);
        }
        const newCar = await createCar(carInput);
        return res.send(newCar).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);            
    }
}

export async function updateCarByIdHandler(req: Request, res: Response) {
    try {
        const updateCarInput: CarUpdate = req.body;
        const id: string = req.params.id;
        const car: Car = await updateCarById(id, updateCarInput)
        return res.send(car).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);            
    }
}

export async function deleteCarByIdHandler(req: Request, res: Response) {
    try {
        const id: string = req.params.id;
        await deleteCarById(id)
        return res.send('Successfully deleted').status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);            
    }
}