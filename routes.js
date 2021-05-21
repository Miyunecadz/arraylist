const routes = require('./RouteProcess')
module.exports = app => {
    app.get('/', routes.index)
    app.get('/new', routes.add)
    app.post('/new', routes.insert)
}