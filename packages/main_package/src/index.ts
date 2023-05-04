import * as dotenv from 'dotenv'
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

console.log(dbUser);
// use the environment variables in your code...
