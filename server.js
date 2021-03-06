import express from 'express';
import path from 'path';
import commonjsVariables from 'commonjs-variables-for-esmodules';


const {__dirname} = commonjsVariables(import.meta);


const app = express();
const port = 3100;


app.use(express.static('./'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})



app.listen(port, () => {
    console.log(__dirname);
})
