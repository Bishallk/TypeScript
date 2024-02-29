"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    username: "bishal",
    password: "bishal123",
    role: Roles.admin,
};
const user2 = {
    username: "bishal",
    password: "bishal123",
    role: Roles.user,
};
const userType = (user) => {
    if (user.role === Roles.admin) {
        console.log(`${user.username}, Yor are an admin`);
    }
    else if (user.role === Roles.user) {
        console.log(`${user.username}, You are a user`);
    }
};
userType(user1);
