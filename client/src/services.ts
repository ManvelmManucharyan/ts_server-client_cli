export interface Car {
    brand: string;
    model: string;
    year: string;
    price: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
}

export function changeData(data: Car[] | Car) {
    if(Array.isArray(data)){
        const result = [];
        for(let car of data) {
            result.push({
                ID: car.id.trim(),
                Brand: car.brand.trim(),
                Model: car.model.trim(),
                Year: car.year.trim(),
                Price: car.price.trim(),
                CreatedAt: changeDateTime(new Date(car.createdAt)),
                UpdatedAt: changeDateTime(new Date(car.updatedAt)),
            });
        }
        return result;
    } else {
        return {
            ID: data.id,
            Brand: data.brand,
            Model: data.model,
            Year: data.year,
            Price: data.price,
            CreatedAt: changeDateTime(new Date(data.createdAt)),
            UpdatedAt: changeDateTime(new Date(data.updatedAt)),
        }
    }
}

function changeDateTime(date: Date) {
      return date.toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'short' 
      });
}