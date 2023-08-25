const validateBookCreation = (req, res, next) => {
    if(!req.body.title || !req.body.authorName || !req.body.genre || !req.body.year || !req.body.rating){
        return res.status(400).json({message: "Please fill in all fields"});
     }
     if(req.body.rating < 1 || req.body.rating > 5){
         return res.status(400).json({message: "Rating must be between 1 and 5"});
     }
     if(req.body.year < 0 || req.body.year > 2021){
         return res.status(400).json({message: "Year must be between 0 and 2021"});
     }
     if (req.body.rating != Math.floor(req.body.rating)) {
         return res.status(400).json({message: "Rating must be a number"});
     }
     if (req.body.year != Math.floor(req.body.year)) {
         return res.status(400).json({message: "Year must be a number"});
     }
    next();
}

module.exports = validateBookCreation;
