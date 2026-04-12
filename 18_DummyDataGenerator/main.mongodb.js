import mongoose from 'mongoose'
import express from 'express'
import { employees } from './models/data.js'
import { random } from './models/callingFun.js'
import { RandomBool } from './models/callingFun.js'
import { Name, City, Language } from './models/callingFun.js'
import "dotenv/config";


const app = express()
const port = 3000;

const URL = process.env.MONGO_URL
const conn = () => {
    mongoose.connect(`${URL}/company`)
}

app.set('view engine', 'ejs');

app.use(express.static('src'));

app.get('/', (req, res) => {
    res.render('index');
})

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
    res.json({ message: "Data Generated Successfully", data: getDataForPrint });
}
)

app.listen(port, () => {
    conn();
    console.log('connected to db');
    console.log('this server is running on 3000 port');
})