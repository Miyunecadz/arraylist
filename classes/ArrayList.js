class ArrayList{
    constructor(){
        // let person = {}
        // person.firstname = Values.firstname
        // person.middlename = Values.middlename
        // person.lastname = Values.lastname
        // person.age = Values.age
        // person.birthdate = Values.birthdate
        // person.address = Values.address
        // person.contact_number = Values.contact_number

        this.persons = []
        // this.persons.push(person)
    }


    add(Values)
    {
        let person = {}
        person.firstname = Values.firstname
        person.middlename = Values.middlename
        person.lastname = Values.lastname
        person.age = Values.age

        this.persons.push(person)
    }

    getAll()
    {
        return this.persons
    }

    displayOneByIndex(IndexNumber)
    {
        if(typeof IndexNumber !== "number")
        {
            return "IndexNumber should be number"
        }
        return this.persons[IndexNumber]
    }

    deleteOneByIndex(IndexNumber)
    {
        if(typeof IndexNumber !== "number")
        {
            return "IndexNumber should be number"
        }

        this.persons.splice(IndexNumber, 1)
        return "Index number : "+ IndexNumber + ", has been deleted!"
    }

    update(IndexNumber, Values)
    {
        if(typeof IndexNumber !== "number")
        {
            return "IndexNumber should be number"
        }

        this.persons[IndexNumber].firstname = Values.firstname
        this.persons[IndexNumber].middlename = Values.middlename
        this.persons[IndexNumber].lastname = Values.lastname
        this.persons[IndexNumber].age = Values.age

        return "Person index of "+ IndexNumber +", successfully updated"
    }

}

module.exports = ArrayList;