//Generate a dummy data in this format in a collection called employees in a db called company

//{
// name:"neha",
// salary:10000000000,
// language:"cpp",
// city:"lucknow",
// isManager:true
// }

//generate 10 such records when a button called generate data is clicked 
//create an express app which mongoose to acheive it
//everytime the button is clicked , you should clear the collection

import mongoose from 'mongoose'
import express from 'express'
import { employees } from './models/data.js'
import { random } from './models/callingFun.js'
import { RandomBool } from './models/callingFun.js'
import { Name, City, Language } from './models/callingFun.js'
import "dotenv/config";
const URL=process.env.MONGO_URL 
const conn = ()=>{
    mongoose.connect(`${URL}/company` )
}
const app = express()
const port = 3000;


app.get('/', async (req, res) => {
    await employees.deleteMany({});
    let getDataForPrint = [];
    for (let i = 1; i <= 10; i++) {

        let newData = await employees({
            name: random(Name),
            salary: `${Math.floor(Math.random() * (100 - 10 + 1)) + 10}K`,
            language: random(Language),
            city: random(City),
            isManager: RandomBool(),
        })
        await newData.save();
        getDataForPrint.push(newData)
    }
    res.send(getDataForPrint)
}
)

app.listen(port, () => {
    conn();
    console.log('connected to db');
    console.log('this server is running on 3000 port');
})