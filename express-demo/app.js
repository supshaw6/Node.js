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
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

// endpoint: /api/courses/1=
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