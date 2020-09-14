// loading neccessary modules
const Joi = require('joi'); // returns a class (capitalize first letter)
const express = require('express');
const app = express(); // options with app -> get, post, put, delete

app.use(express.json()); 

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

// add a new course
app.post('/api/courses', (req, res) => {
    // validation logic can be replaced with joi npm package
    const { error } = validateCourse(req.body); // = result.error
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name // we need input validation, what if user doesn't provide a name?
    };
    courses.push(course);
    res.send(course);
})

// update a course
app.put('/api/courses/:id', (req, res) => {
    // look up course with given id
    // if it doesn't exist, return 404, not found
    course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found.'); // return status 404 - object not found
    }
    // Validate
    // If invalid, return 400 - Bad request
    // using object destructuring because we only need error from result
    const { error } = validateCourse(req.body); // = result.error
    if (error) return res.status(400).send(error.details[0].message);

    // Update course
    course.name = req.body.name;

    // Return the updated course
    res.send(course);
})

// delete a course
app.delete('/api/courses/:id', (res, req) => {
    // Look up course
    // Doesn't exist? return 404
    course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.'); // return status 404 - object not found

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
});

// function for validating course
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}

// endpoint: /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.'); // return status 404 - object not found
    res.send(course);
});


// use an environment variable (part of environment in which a process runs) in place of 3000 to specify port
// in terminal, to define a port on Mac: export PORT = 5000
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));