const mongoose=require('mongoose'); 

mongoose. connect('mongodb://localhost/pirates',{
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useFindAndModify:true
})
.then(()=>console.log('Database connection established'))
.catch(err=>console.log('There was an error', err));