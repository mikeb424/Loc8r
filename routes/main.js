var controller = require('../MVC/controllers/main');

module.exports = function(app)
{
    app.get('/', controller.index);
};