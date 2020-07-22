const about = (req, res) => {
    res.render('generic-text', {title: 'About'});
};

// Exposing controllers. Take note that in ES5, this should have been module.exports = {};
module.exports = {
    about
};