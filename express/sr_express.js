 const express=require("express");
 const app=express();
 const port=5000;
 const checkTime=require("./middlewares/md")
 app.use(express.static('public'))
 app.set('view engine', 'pug')
 
 app.get('/',checkTime, (req, res) => {
    res.render('Home' )
  })

  app.get('/Contact',checkTime, (req, res) => {
    res.render('Contact' )
  })

  app.get('/Our_services',checkTime, (req, res) => {
    res.render('Our_services' )
  })



app.use((req, res) => {
    res.status(404).send('not found');
});

 app.listen(port,(err)=>{
  err?console.log(err):console.log(`server running at port ${port}`) }
  )