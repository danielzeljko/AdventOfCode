const fs = require("fs");

fs.readFile('01-calorie-counting.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let maxCalories = 0;
    const caloriesCarriedPerElves = data.split("\n\n");

    for (const elve of caloriesCarriedPerElves) {
        const totalCalories = getTotalCalories(elve.trim().split("\n"));
        maxCalories = Math.max(totalCalories, maxCalories);
    }
    
    console.log("🚀 ~ file: 01-calorie-counting.js:15 ~ fs.readFile ~ maxCalories:", maxCalories)
    return maxCalories;
});

function getTotalCalories(calories) {
    return calories.reduce((total, calorie) => total + parseInt(calorie), 0);
}