//program that finds whether a year is a leap year or not
function isLeapYear(yr){
    if ((yr % 4 === 0 && yr % 100 !=0) || (year % 400 === 0)){
        return true;
    }else {
        return false;
    }
}
console.log(isLeapYear(2020));

//Weather Clothing Advisor

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is the current temperature (in degrees Celsius)? ', temperature => {
    readline.question('Is it raining? (yes/no) ', raining => {
        temperature = parseInt(temperature);
        let advice = '';

        if (raining.toLowerCase() === 'yes') {
            advice += 'Take an umbrella or wear a raincoat. ';
        }

        if (temperature < 10) {
            advice += 'Wear a heavy coat, gloves, and a scarf.';
        } else if (temperature < 20) {
            advice += 'Wear a light jacket or sweater.';
        } else if (temperature < 30) {
            advice += 'A t-shirt and jeans should be fine.';
        } else {
            advice += 'Wear light and breathable clothing.';
        }

        console.log(advice);
        readline.close();
    });
});
