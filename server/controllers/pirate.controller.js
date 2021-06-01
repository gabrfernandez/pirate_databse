const Pirate=require('../models/pirate.model'); 

module.exports.createPirate= (req, res)=>{
    Pirate.create(req.body)
        .then(Pirate=>res.json(Pirate))
        .catch(err=>res.status(400).json(err)); 
}

module.exports.getAll=(req, res)=>{
    Pirate.find()
        .then(pirates=>res.json(pirates))
        .catch(err=>res.status(400).json(err));
}

module.exports.getOne=(req, res)=>{
    Pirate.findById(req.params.id)
        .then(pirate=>res.json(pirate))
        .catch(err=>res.status(400).json(err));
}

module.exports.deletePirate=(req, res)=>{
    Pirate.findByIdAndDelete(req.params.id)
        .then(()=>res.json({status:'Success'}))
        .catch(err=>res.status(400).json(err));
}