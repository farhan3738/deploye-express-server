import express from 'express';

const app = express();
const PORT = 3000;

app.get('api/users',(req,res)=> {
    res.status(200).json({ message: "Here are the usres."});
});

app.listen(PORT , ()=> console.log(`This server is listening here at: http://locaalhost${PORT}`));