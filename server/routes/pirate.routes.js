const piratesCtl=require('../controllers/pirate.controller');

module.exports=app=>{
    app.get('/api/pirates', piratesCtl.getAll);
    app.post('/api/pirates', piratesCtl.createPirate);
    app.get('/api/pirates/:id', piratesCtl.getOne);
    app.delete('/api/pirates/:id/delete', piratesCtl.deletePirate);
}