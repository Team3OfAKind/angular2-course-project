export class User {
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
    }]

    // constructor(
    //     public username: string,
    //     public email: string,
    //     public password: string,
    //     public confirmedPassword: string
    // ) { }
}