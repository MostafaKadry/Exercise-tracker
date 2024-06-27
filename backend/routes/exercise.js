const router = require("express").Router();
let Exercise = require('../models/exercise.model.js');

router.route('/').get((req, res)=> {
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error' + err));
})
router.route('/add').post((req, res)=> {
    const {username} = req.body;
    const {description} = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({username, description, duration, date});
    newExercise.save()
    .then(()=> res.json('New Exercise Added!'))
    .catch(err => res.status(400).json(err));
});
router.route("/:id").get((req, res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(err));
});
router.route("/:id").delete((req, res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json(err));
});
router.route("/update/:id").post((req, res)=>{
    const {username} = req.body;
    const {description} = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    Exercise.findByIdAndUpdate(req.params.id, {username, description, duration, date})
    .then(() => res.json('Exercise Updated.'))
    .catch(err => res.status(400).json(err));
});
module.exports = router;