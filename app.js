const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up your routes here

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set your view engine to use EJS
app.set('view engine', 'ejs');

// Define routes for your portfolio pages
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/projects', (req, res) => {
    // Create an array of sample projects
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            image: '/images/project1.jpg',
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            image: '/images/project2.jpg',
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3',
            image: '/images/project3.jpg',
        },
    ];

    res.render('projects', { title: 'Projects', projects });
});

app.get('/services', (req, res) => {
    // Create an array of services you offer
    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Database Management',
    ];

    res.render('services', { title: 'Services', services });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
