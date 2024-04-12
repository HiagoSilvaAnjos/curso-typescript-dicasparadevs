"use strict";
const user = {
    firstName: "Hiago",
    lastName: "Silva",
    age: 19,
    email: "Hiago@gmail.com",
    password: "123456",
    register() {
        return `Hello world ${this.firstName}`;
    },
    orders: [
        {
            registrationId: 202411140022,
            student: "Hiago",
        },
    ],
};
console.log(user.register());
const author = {
    firstName: "Jefrey",
    lastName: "Cunha",
    age: 44,
    email: "jefrey@gmail.com",
    password: "password",
    register() {
        return `Hello world ${this.firstName}`;
    },
    address: "Rua em lugar nenhum",
    orders: [],
    books: ["Coraline", "Sr Raposo"],
};
console.log(author.register());
const emailUser = {
    firstName: "Hiago",
    email: "hiago@gmail.com",
};
const newAuthor = {
    firstName: "",
    email: "",
    books: [""],
};
const grade = "10";
