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

const temperature = parseInt(prompt('What is the current temperature (in degrees Celsius)?'));
const isRaining = prompt('Is it raining? (yes/no)').toLowerCase() === 'yes';

let advice = isRaining ? 'Take an umbrella or wear a raincoat. ' : '';

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

// fibanocci sequence code

function fibanocci(n) {
    if (n <= 0) {
        return 0;
    }else if (n === 1) {
        return 1;
    }else {
        return fibanocci(n-1) + fibanocci(n-2);
    }
}

console.log(fibanocci(0));

//palindrome 

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    function checkPalindrome(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return checkPalindrome(s, start + 1, end - 1);
    }

    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
