var empl1 = {
    name: "bishal",
    age: 22,
    id: 1,
    department: "IT",
    // we must include all the properties of both types
};
var createUserProfile = function (user) {
    console.log("User Name: ".concat(user.name, ", City: ").concat(user.city));
};
var user11 = {
    name: "bishal Kunwar",
    age: 22,
    city: "Kathmandu",
    country: "Nepal",
};
createUserProfile(user11);
