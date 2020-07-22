const index = (req, res) => {
    res.render('index', {title: 'Express'});
};

// Exposing controllers. Take note that in ES5, this should have been module.exports = {};
module.exports = {
    index
};