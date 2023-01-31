function checkTime(req, res, next) {
    const currentDay = new Date();
    const currentHour = currentDay.getHours();
    if (currentDay.getDay() >= 1 && currentDay.getDay() <= 5 && currentHour >= 9 && currentHour < 17) 
    { next() } 
    else 
    {  res.status(503).send("We are closed."); }
}

module.exports=checkTime
