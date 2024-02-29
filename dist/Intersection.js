"use strict";
const empl1 = {
    name: "bishal",
    age: 22,
    id: 1,
    department: "IT",
};
const createUserProfile = (user) => {
    console.log(`User Name: ${user.name}, City: ${user.city}`);
};
const user11 = {
    name: "bishal Kunwar",
    age: 22,
    city: "Kathmandu",
    country: "Nepal",
};
createUserProfile(user11);
