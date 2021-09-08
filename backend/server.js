const express = require('express');
const fs = require('fs');
const path = require('path');
//const cors = require('cors');

require('dotenv').config(); //serving environmental variables from .env file (can also be done directly in docker container (?))

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST;
var used_names = [];

//app.use(cors()); //For API call from react frontend

//Starting server as callback
app.listen(port, () => {
    console.log(`Listening at http://${hostname}:${port}/getFishName`);
});

//Function making sure that each element of fish.txt is only used once
function checkUniqueness(used_array, rand_element) {
    return used_array.includes(`${rand_element}`)
}

//Defining GET request
app.get("/getFishName", (req, res) => {
    pathname = path.join(__dirname, 'fish.txt');
    fs.readFile(pathname, async (err, data) => {

        var fish_array = data.toString('utf-8').split('\n'); //convert txt-file into array with utf-8 encoding
        var rand_element = Math.floor(Math.random() * fish_array.length);

        //Making sure that name is not used twice (use promise to be able to store callback in variable used_names!)
        var path_to_used_numbers = path.join(__dirname, 'used_numbers.txt');
        var used_names = await fs.promises.readFile(path_to_used_numbers, 'utf-8');   
        var used_array = used_names.toString('utf-8').split(',');  

        console.log(used_array);
        used_array.push(rand_element);
        var existing = checkUniqueness(used_array, rand_element);
        console.log(existing);

        if (!existing) {
            //Browser output (via frontend)
            res.write(fish_array[rand_element].toString('utf-8'));
            res.end(); 

            //Console logout
            console.log(fish_array[rand_element].toString('utf-8'));

            //Update external used_numbers.txt
            fs.writeFile(path_to_used_numbers, `${used_array}`, (err, data) => {
                if (err) throw err;
                console.log('Replaced!');
            });
        }
        
        else {
            //Browser output (via frontend)
            res.write(`The name ${fish_array[rand_element].toString('utf-8')} is already in use! Try again!`);
            res.end(); 

            //Console logout
            console.log(`The name ${fish_array[rand_element].toString('utf-8')} is already in use! Try again!`);
        }

    });

});

module.exports = {
    checkUniqueness,
    app,
};