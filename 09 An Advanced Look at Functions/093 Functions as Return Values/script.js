function multiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

const triple = multiplyBy(3);
console.log(triple);
console.log(triple(2));

const double = multiplyBy(2);
console.log(double);
console.log(double(2));

const halve = multiplyBy(0.5);
console.log(halve);
console.log(halve(5));

function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num <= y;
    }
}



const isChild = makeBetweenFunc(0, 18);
console.log(isChild);
console.log(isChild(17));

const isNineties = makeBetweenFunc(1990, 2000);
console.log(isNineties);
console.log(isNineties(2005));

const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather);
console.log(isNiceWeather(79));
console.log(isNiceWeather(59));