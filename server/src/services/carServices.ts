import { CarModel, Car, CarSearch, CarUpdate, CarSort } from "../models/carModel";

export async function getCar(searchInput: CarSearch ): Promise<Car> {
    return await CarModel.findOne(searchInput);
}

export async function getCars(sort: any): Promise<Car[]> {
        return await CarModel.find({}).sort(sort);
}

export async function createCar(carInput: Car): Promise<Car> {
    return await CarModel.create(carInput);
}

export async function updateCarById(id: string, updateCarInput: CarUpdate): Promise<Car> {
    return await CarModel.findOneAndUpdate( { id }, updateCarInput, { new: true });
}

export async function deleteCarById(id: string): Promise<Boolean> {
    await CarModel.deleteOne({ id });
    return true;
}