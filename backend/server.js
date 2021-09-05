const express = require('express')
const fs = require('fs')
const path = require('path')

require('dotenv').config() //serving environmental variables from .env file (can also be done directly in docker container (?))

const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST;
var used_names = [];

//Starting server as callback
app.listen(port, () => {
    console.log(`Listening at http://${hostname}:${port}`)
});

//Defining GET request
app.get("/getFishName", (req, res) => {
    pathname = path.join(__dirname, 'fish.txt');
    fs.readFile(pathname, async (err, data) => {

        var fish_array = await data.toString('utf-8').split('\n'); //convert txt-file into array with utf-8 encoding
        var rand_element = await Math.floor(Math.random() * fish_array.length);

        //Making sure that name is not used twice (use promise to be able to store callback in variable used_names!)
        var path_to_used_numbers = await path.join(__dirname, 'used_numbers.txt');
        var used_names = await fs.promises.readFile(path_to_used_numbers, 'utf-8');     
        console.log(used_names)
        //used_names = used_names.toString('utf-8');
        //console.log(used_names);
        used_names = [];
        used_names.push(rand_element);
        var existing = used_names.includes('rand_element');

        if (!existing) {
            //Browser output (via frontend)
            res.write(fish_array[rand_element].toString('utf-8'));
            res.write(used_names.toString('utf-8'));
            res.end(); 

            //Console logout
            console.log(fish_array[rand_element].toString('utf-8'));
            console.log(used_names.toString('utf-8'));

            //Update external used_numbers.txt to make sure not
            fs.writeFile(path_to_used_numbers, `${used_names}`, (err, data) => {
                if (err) throw err;
                console.log('Replaced!');
            });
        }
        
        else {
            //Browser output (via frontend)
            res.write(`The name ${fish_array[rand_element].toString('utf-8')} is already in use!`);
            res.end(); 

            //Console logout
            console.log(`The name ${fish_array[rand_element].toString('utf-8')} is already in use!`);
        }

    });

});