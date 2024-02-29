"use strict";
const p1 = ["Acer Nitro 5", "laptop", 120000, 5];
const p2 = ["Redmi 9 Prime", "mobile", 20000, 10];
const showInfo = (p) => {
    return `Product name:${p[0]} Type:${p[1]} Price:${p[2]} Quantity:${p[3]}`;
};
console.log(showInfo(p1));
