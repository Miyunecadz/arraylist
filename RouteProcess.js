const ArrayList = require('./classes/ArrayList')
const list = new ArrayList()

exports.index = (req,res) => {
    // console.log(list.persons)
    res.render('index.ejs', {persons : list.persons})
}

exports.add = (req,res) => {
    res.render('add.ejs', {message: "", error: ""})
}

exports.insert = (req,res) => {
    if(req.body.firstname === "" && req.body.middlename === "" && req.body.lastname === "" && req.body.age === "")
    {
        // return res.json({status: "fail", message: "Please kindly contact the system admin"})
        return res.render('add.ejs', {error: "Unable to save new person", message: ""})
    }

    let values = {}
        values.firstname = req.body.firstname
        values.middlename = req.body.middlename
        values.lastname = req.body.lastname
        values.age = req.body.age


        list.add(values)

        // return res.json({status: "success", message: "New person successfully create!"})
        return res.render('add.ejs', {message: "New person successfully created!", error: ""})
}

exports.display = (req,res) => {
    let person = list.displayOneByIndex(req.params.id)
    res.render('update.ejs', {id: req.params.id, person: person, error: ""})
}

exports.update = (req,res) => {
    let person = list.displayOneByIndex(req.params.id)
    // console.log(req.body)
    if(req.body.firstname === "" && req.body.middlename === "" && req.body.lastname === "" && req.body.age === "")
    {
        return res.render('update.ejs', {error: "Unable to save new person", id: req.params.id, person: person})
    }

    let values = {}
    values.firstname = req.body.firstname
    values.middlename = req.body.middlename
    values.lastname = req.body.lastname
    values.age = req.body.age

    let response = list.update(req.params.id, values)

    return res.redirect('/')
}

exports.delete = (req,res) => {
    let id = req.params.id

    let response = list.deleteOneByIndex(id)

    res.redirect('/')
}
