// //Bai 2
for (let i = 0; i < 4; i++) { 
    let row = "";
    for (let j = 1; j <= 5; j++) {
        let number = i * 5 + j;
        if (number < 10) {
            row += number + "  ";
        } else {
            row += number + " ";
        }
    }
    console.log(row);
}

//Bai 3
for (let i = 1; i < 7; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}


//Bai 4
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 8; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 8) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

//Bai 5
const arr = [2, 4, 6, 8, 3, 7, 5, 1];
for (let i = 0; i < arr.length; i++) {
    let row = "";
    for (let j = i + 1; j < arr.length; j++) {
        let total = arr[i] + arr[j];
        if (total === 10) {
            row += `${arr[i]} + ${arr[j]} = ${total}`;
        }
    }
    if (row !== "") {
        console.log(row);
    }
}

//Bai 6
for (let i = 0; i < 6; i++) {
    let row = "";
    for (let j = 1; j < 6 - i; j++) {
        row += j + " ";
    }
    console.log(row);
}

//Bai 7
for (let i = 0; i < 5; i++) {
    let row = (`Tuan ${i + 1}: `);
    for (let j = 1; j <= 7; j++) {
        let date = i * 7 + j;
        if (date < 10) {
            row += date + "  "
        } else {
            row += date + " ";
        }
        if (date > 30) {
            break;
        }
    }
    
    console.log(row);
}

//Bai 8
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= (8 - i); j++) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
            row += "*"
    }
    console.log(row);
}
