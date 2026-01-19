//Bai 1
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Bai 2
for (i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}`);
    for (j = 1; j <= 10; j++) {
        let result = j * i;
        console.log(`${j} * ${i} = ${result}`);
    }
    console.log("------------");
}

//Bai 3
let arr = [];
for (let i = 0; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(arr)

//Bai 4
for (let i = 0; i <= 10; i++) {
    console.log(`user${i}example.com`)
}

//Bai 5
const doanhThu = [
    {month: 1, total: 10},
    {month: 2,total: 10},
    {month: 3, total: 30},
    {month: 4, total: 10},
    {month: 5, total: 10},
    {month: 6, total: 10},
    {month: 7, total: 10},
    {month: 8, total: 10},
    {month: 9, total: 10},
    {month: 10, total: 10},
    {month: 11, total: 10},
    {month: 12, total: 10},
];
let tong = 0;
for (i = 0; i < doanhThu.length; i++) {
    tong = tong + doanhThu[i].total;
}
console.log(tong);

// for (i = 0; i <= doanhThu.length; i++) {
//     sum = sum + doanhThu[i].total;
// }
// console.log(sum);