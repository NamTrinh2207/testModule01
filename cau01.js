let point = [1, 3, 5, 4, 6, 8, 7, 9, 10, 2];
let max = point[0];
let index = 0;
for (let i = 1; i < point.length; i++) {
    if (point[i] > max) {
        max = point[i];
        index = i;
    }
}
point[index] = 0;

let max1 = point[0];
let index1 = 0;
for (let i = 1; i < point.length; i++) {
    if (point[i] > max1) {
        max1 = point[i];
        index1 = i;
    }
}
point[index1] = 0;

let max2 = point[0];
for (let i = 1; i < point.length; i++) {
    if (point[i] > max2) {
        max2 = point[i];
    }
}
document.writeln("Point lớn thứ 3 trong dãy số là: " + max2);

