import * as dotenv from 'dotenv';
dotenv.config();
const firstName = process.env.first;
console.log(firstName);
console.log(process.env.last);
