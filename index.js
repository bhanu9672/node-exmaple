import express from "express";

const app = express();
const port = 5000;
app.use( "/", ( req, res ) => {
    res.json( { message : "Hello World" });
})

app.listen( port, () => {
    console.log( `Server Running On Port Number is: ${port}` );
})