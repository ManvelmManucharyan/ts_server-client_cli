#!/usr/bin/env node
import { program } from 'commander';
import inquirer from 'inquirer';
import axios, { AxiosResponse } from 'axios';
import { Car, changeData } from './services';

const url: string = 'http://localhost:5000';

program
    .version('1.0.0')
    .description('A simple CLI application using Commander and Inquirer');

program
    .command('list')
    .description('get list of the cars')
    .action(async () => {
        try {
            console.log(url);
            
            const cars: AxiosResponse<Car[]> = await axios.get(`${url}/car/all`)
            if (!cars.data) throw new Error('Something went wrong')
            console.log(changeData(cars.data));
        } catch (error: any) {
            console.log(error.message);
        }
    });

program
    .command('sort')
    .description('cars sorting')
    .action(async () => {
        try {
            const sortingOptions = [
                {
                    name: 'By Year',
                    value: 'year',
                },
                {
                    name: 'By Price',
                    value: 'price',
                },
                {
                    name: 'By Created Date',
                    value: 'createdAt',
                },
                {
                    name: 'By Updated Date',
                    value: 'updatedAt',
                },
              ];
            
            const orderOptions = [
                {
                    name: 'Sort the data in ascending order',
                    value: 'asc',
                },
                {
                    name: 'Sort the data in descending  order',
                    value: 'desc',
                },
            ];
              const { sortBy, orderBy } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'sortBy',
                    message: 'Select a sorting option:',
                    choices: sortingOptions,
                },
                {
                    type: 'list',
                    name: 'orderBy',
                    message: 'Select ordering',
                    choices: orderOptions,
                },
              ]);
            const cars: AxiosResponse<Car[]> = await axios.get(`http://localhost:5000/car/sort?${sortBy}=${orderBy}`)
            if (!cars.data) throw new Error('Something went wrong')
            console.log(changeData(cars.data));
        } catch (error: any) {
            console.log(error.message);
        }
    });

program
    .command('create')
    .description('create car')
    .action(async () => {
        try {
            const { brand, model, year, price } = await inquirer.prompt([
                {
                  type: 'input',
                  name: 'brand',
                  message: 'What brand is your car?',
                },
                {
                  type: 'input',
                  name: 'model',
                  message: 'Model of the car?',
                },
                {
                    type: 'input',
                    name: 'year',
                    message: 'Please, write when car is manufactured',
                },
                {
                    type: 'input',
                    name: 'price',
                    message: 'Finally, please enter the cost of the car:',
                },
              ]);
            const createdFields: Partial<Car> = {
                brand: brand.trim() || undefined,
                model: model.trim() || undefined,
                year: year.trim() || undefined,
                price: price.trim() || undefined,
            };
            const car: AxiosResponse<Car> = await axios.post(`http://localhost:5000/car/create`, createdFields)
            if (!car.data) throw new Error('Something went wrong')
            console.log(changeData(car.data));
        } catch (error: any) {
            console.log(error.message);
        }
    });

program
    .command('delete')
    .description('delete car')
    .action(async () => {
        try {
            const { id } = await inquirer.prompt([
                {
                  type: 'input',
                  name: 'id',
                  message: 'Please, write car id that you want to delete',
                },
              ]);
            const response: AxiosResponse<String> = await axios.delete(`http://localhost:5000/car/delete/${id.trim()}`)
            if (!response) throw new Error('Something went wrong')
            console.log(response.data);
        } catch (error: any) {
            console.log(error.message);
        }
    });

program
    .command('update')
    .description('update car')
    .action(async () => {
        try {
            const { id, brand, model, year, price } = await inquirer.prompt([
                {
                  type: 'input',
                  name: 'id',
                  message: 'Please, write car id that you want to update',
                },
                {
                    type: 'input',
                    name: 'brand',
                    message: `(Leave this field empty if you do not want to update this section) BRAND: `
                },
                {
                    type: 'input',
                    name: 'model',
                    message: `(Leave this field empty if you do not want to update this section) MODEL: `,
                },
                {
                    type: 'input',
                    name: 'year',
                    message: `(Leave this field empty if you do not want to update this section) YEAR: `,
                },
                {
                    type: 'input',
                    name: 'price',
                    message: `(Leave this field empty if you do not want to update this section) PRICE: `,
                },
              ]);
            const updatedFields: Partial<Car> = {
                brand: brand.trim() || undefined,
                model: model.trim() || undefined,
                year: year.trim() || undefined,
                price: price.trim() || undefined,
            };
            const car: AxiosResponse<Car> = await axios.put(`http://localhost:5000/car/update/${id.trim()}`, updatedFields)
            if (!car.data) throw new Error("Something went wrong") 
            console.log(changeData(car.data));
        } catch (error: any) {
            console.log(error.message);
        }
    });


program.parse(process.argv);
