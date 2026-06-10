type role = "User" | "Admin"


export interface users {
    email: string;
    password: string
    role: role
};

export interface usersDTO{
    email: string;
    password: string,
    role?: role,
    _id?: string,
};

export interface validationUser{
    email: string;
    password?: string
    role?: role
    _id: string
};