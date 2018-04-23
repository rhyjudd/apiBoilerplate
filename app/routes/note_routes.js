//route/note_routes.js

module.exports = function(app, db){
    app.post('/notes', (req,res)=>{
        //we will create the note here
        res.send('hello world');
    })
}


