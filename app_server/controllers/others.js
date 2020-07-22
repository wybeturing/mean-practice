const about = (req, res) => {
    res.render('generic-text', {
        title: 'About',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
};

// Exposing controllers. Take note that in ES5, this should have been module.exports = {};
module.exports = {
    about
};