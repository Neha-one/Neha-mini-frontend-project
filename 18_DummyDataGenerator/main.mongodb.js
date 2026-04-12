import mongoose from 'mongoose'
import express from 'express'
import { employees } from './models/data.js'
import { random } from './models/callingFun.js'
import { RandomBool } from './models/callingFun.js'
import { Name, City, Language } from './models/callingFun.js'
// this line is used to import environment variables from .env file. you can also directly write url in main.mongodb.js file but it is not recommended for security purpose.
import "dotenv/config";


const app = express()
const port = 3000;

//this is  mongodb connection url which is stored in .env file for security purpose. you can also directly write url here but it is not recommended.
const URL = process.env.MONGO_URL
const conn = () => {
    mongoose.connect(`${URL}/company`)
}

//this line is used to set ejs as view engine for rendering html file. you can also use other view engines like pug, handlebars etc. but here we are using ejs for simplicity.
app.set('view engine', 'ejs');

//this line is used to serve static files from src folder. you can also use other folders like public, assets etc. but here we are using src for simplicity.
app.use(express.static('src'));

// app.get('/', (req, res) => {
//     res.render('index');
// })

app.get('/generate', async (req, res) => {
    await employees.deleteMany({});
    let getDataForPrint = [];
    for (let i = 1; i <= 10; i++) {

        let newData = new employees({
            name: random(Name),
            salary: `${Math.floor(Math.random() * (100 - 10 + 1)) + 10}K`,
            language: random(Language),
            city: random(City),
            isManager: RandomBool(),
        })
        await newData.save();
        getDataForPrint.push(newData)
    }
    res.render('index');

    //if you want to print data in console then use below line and comment above line.
    // res.json({ message: "Data Generated Successfully", data: getDataForPrint });
}
)

app.listen(port, () => {
    conn();
    console.log('connected to db');
    console.log('this server is running on 3000 port');
})