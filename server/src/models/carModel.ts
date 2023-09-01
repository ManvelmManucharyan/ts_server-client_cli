import mongoose from "mongoose";

export interface Car {
    brand: string;
    model: string;
    year: string;
    price: string;
}

export interface CarSearch {
    id?: string;
    brand?: string;
    model?: string;
    year?: string;
    price?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CarUpdate {
    brand?: string;
    model?: string;
    year?: string;
    price?: string;
}

export interface CarSort {
    year?: 'asc' | 'desc';
    price?: 'asc' | 'desc';
    createdAt?: 'asc' | 'desc';
    updatedAt?: 'asc' | 'desc';
}

const CarSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => Math.random().toString(36).substring(2, 18)
    },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: String, required: true },
}, { timestamps: true })

export const CarModel = mongoose.model('Car', CarSchema);
