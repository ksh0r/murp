import express from 'express'

const app = express();
const PORT = process.env.PORT | 5000;

app.get('/', (req,res) => {
    res.send("Welcome to the MurP Server");
});

app.listen(PORT, () => {
    console.log(`The Server is up and running on PORT: ${PORT}`);
})
