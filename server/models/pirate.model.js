const mongoose=require('mongoose'); 

const PirateSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [
            true, 
            'Please provide a name!'
        ]
    },
    imageUrl:{
        type: String, 
        required: [
            true,
            'Please provide an image URL'
        ]
    }, 
    treasures:{
        type: Number, 
        required:[
            true,
            'Please provide a number for treasures'
        ]
    }, 
    phrase:{
        type: String, 
        required:[
            true, 
            'Please provide a catch phrase!'
        ]
    }, 
    position:{
        type: String, 
        required:[
            true, 
            'Please provide a position'
        ]
    }, 
    pegLeg:{
        type: Boolean, 
        required: [
            true, 
            "Please specify if the pirate has a Peg Leg."
        ]
    }, 
    eyePatch:{
        type:Boolean,
         required:[
             true, 
             'Please specify if the pirate has an eye patch'
         ]
    }, 
    hookHand:{
        type:Boolean, 
        required:[
            true, 
            'Please specify if the pirate has a hook hand'
        ]
    }
}, {
    timestamps:true
}); 

const Pirate=mongoose.model('Pirate', PirateSchema); 

module.exports=Pirate;