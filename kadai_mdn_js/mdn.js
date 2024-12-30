const today = new Date();

const year = today.getFullYear().toString().padStart(4, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const date = today.getDate().toString().padStart(2, '0');

const todayText = year + '年' + month + '月' + date + '日';
console.log(todayText);
