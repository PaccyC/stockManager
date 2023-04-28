const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');

//setting routes

const userRoutes=require('./routes/userRoutes');
const itemRoutes=require('./routes/items');

// configuring environment variables
dotenv.config();

const app=express();

mongoose.connect(process.env.DB_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Tha app is listening from port ${process.env.PORT}`);
    })
})
.catch(error=>console.log(error));

app.use(express.json());

// settingup route middlewares

app.use('/api/user',userRoutes);
app.use('/api/item',itemRoutes);