let val;

const today = new Date();
// Fri Dec 15 2017 17:45:33 GMT+0000 (GMT Standard Time)
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('Sept 10 1981');
birthday = new Date('9/10/81');

val = birthday;
val = today.getMonth(); // Zero-based index
val = today.getDate(); // Get current day index
val = today.getDay(); // 5 = Day index (Friday)
val = today.getFullYear(); // 2017
val = today.getHours(); // 17
val = today.getMinutes(); // 54
val = today.getSeconds(); // 59
val = today.getMilliseconds(); // 96
val = today.getTime(); // 151339605234234

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);


console.log(birthday);
