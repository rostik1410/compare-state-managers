export type User = {
    [key: string]: number | string | Object,
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

export type SimpleUser = Omit<User, 'address' | 'company' > & {
    [key: string]: number | string ,
};
