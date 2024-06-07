// Program 1: Checking Age Eligibility (AND)
function checkAgeEligibility(age) {
    if (age >= 18 && age <= 65) {
        console.log("You are eligible for the activity.");
    } else {
        console.log("You are not eligible for the activity.");
    }
}

checkAgeEligibility(20);  // Output: You are eligible for the activity.
checkAgeEligibility(70);  // Output: You are not eligible for the activity.

// Program 2: Login Access (OR)
function loginAccess(username, password) {
    if (username === "admin" || password === "1234") {
        console.log("Login successful.");
    } else {
        console.log("Login failed.");
    }
}

loginAccess("admin", "abcd");  // Output: Login successful.
loginAccess("user", "1234");   // Output: Login successful.
loginAccess("user", "abcd");   // Output: Login failed.

// Program 3: Checking for Night Time (NOT)
function checkNightTime(hour) {
    if (!(hour >= 19 || hour < 6)) {
        console.log("It's daytime.");
    } else {
        console.log("It's nighttime.");
    }
}

checkNightTime(10);  // Output: It's daytime.
checkNightTime(21);  // Output: It's nighttime.

// Program 4: Checking for Even or Odd Number
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

checkEvenOrOdd(4);  // Output: 4 is even.
checkEvenOrOdd(7);  // Output: 7 is odd.

// Program 5: Checking for Weekend or Weekday
function checkWeekendOrWeekday(day) {
    if (day === "Saturday" || day === "Sunday") {
        console.log("It's a weekend.");
    } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        console.log("It's a weekday.");
    } else {
        console.log("Invalid day.");
    }
}

checkWeekendOrWeekday("Saturday");  // Output: It's a weekend.
checkWeekendOrWeekday("Wednesday"); // Output: I
