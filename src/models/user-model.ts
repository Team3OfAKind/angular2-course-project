export interface User {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    cartMeals: any[];
    favouriteMeals: any[];
    addresses: [{
        street: string,
        city: string
    }];
}
