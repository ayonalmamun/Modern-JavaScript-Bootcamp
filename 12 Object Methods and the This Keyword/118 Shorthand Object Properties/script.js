const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, currentValue) => sum + currentValue)
    const avg = sum / arr.length;

    // before ES2015
    // return {
    //     max: max,
    //     min: min,
    //     sum: sum,
    //     avg: avg
    // }

    // shorthand syntax
    return {
        max,
        min,
        sum,
        avg  
    }; 
}

const reviews = [2.0, 4.5, 5.0, 3.7, 4.2, 2.5];

const stats = getStats(reviews);
console.log(stats);