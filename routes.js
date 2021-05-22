const routes = require('./RouteProcess')
module.exports = app => {
    app.get('/', routes.index)
    app.get('/new', routes.add)
    app.post('/new', routes.insert)
    app.get('/person/:id', routes.display)
    app.post('/person/:id', routes.update)
    app.post('/delete/:id', routes.delete)
}
