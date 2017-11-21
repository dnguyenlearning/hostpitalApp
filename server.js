const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');



//connect to database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database '+config.database);
})

mongoose.connection.on('error',(err)=>{
    console.log('error:' + err);
})




const app=express();



const port=process.env.PORT||3000;
// const port=3000;

//set static folder

app.use(express.static(path.join(__dirname,'public')));



//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//passport middleware

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

const users=require('./routes/users');
const create=require('./routes/create');
const medicines=require('./routes/medicines');


app.use('/api/users',users);
app.use('/api/create',create);
app.use('/api/medicines',medicines);


app.get('/',(req,res)=>{
    res.send('invalid endpoint');
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})


app.listen(port, (err)=>{
    if(err) throw err;
    console.log('server started on port '+port);
})