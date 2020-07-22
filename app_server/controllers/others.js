const about = (req, res) => {
    res.render('index', {title: 'About'});
};

// Exposing controllers. Take note that in ES5, this should have been module.exports = {};
module.exports = {
    about
};