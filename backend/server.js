const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//bring route
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag');
const optionRoutes = require('./routes/option');
const uploaderRoutes = require('./routes/uploader')
const googleApiRoutes = require('./routes/googleapi');

//app
const app = express();

//cors
if(process.env.NODE_ENV=='development'){
    app.use(cors({origin: [`${process.env.CLIENT_URL}`, `${process.env.BACKEND_URL}`]}));    
}

//database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('DB connected'))
.catch((error) => console.log('Error in connecting to DB: ' + error));


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routes
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);
app.use('/api', optionRoutes);
app.use('/api', uploaderRoutes);
app.use('/api', googleApiRoutes);


//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});