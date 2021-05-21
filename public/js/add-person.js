let personForm = document.getElementById('add-person-form')

personForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    let formURI = personForm.action
    let formData = new FormData(personForm)
    
    let response = await fetch(formURI, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: {
            'firstname' : formData.get('firstname'),
            'middlename' : formData.get('middlename'),
            'lastname' : formData.get('lastname'),
            'age' : formData.get('age'),
        }
    })

    response = await response.json()

    console.log(response)
})