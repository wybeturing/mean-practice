// GET the home page
const homelist = (req, res) => {
    res.render('index', {title: 'Home'});
};

// GET the location page
const locationInfo = (req, res) => {
    res.render('index', {title: 'Location info'});
};

// GET the add review page
const addReview = (req, res) => {
    res.render('index', {title: 'Location info'});
};

// Exposing controllers. Take note that in ES5, this should have been module.exports = {};
module.exports = {
    homelist,
    locationInfo,
    addReview
};