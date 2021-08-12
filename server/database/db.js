import mongoose from 'mongoose';


const connection = async (user,pass) => {
    const URL = `mongodb+srv://${user}:${pass}@cluster0.tughs.mongodb.net/FLIPCART_CLONE?retryWrites=true&w=majority`; 

    try{
        await  mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false });
        console.log('Database connected successfully');
    } catch(error) {
    console.log('Error', error.message);
    }
}

export default connection;