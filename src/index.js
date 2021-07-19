document.addEventListener('DOMContentLoaded', () => {

fetchDogs()

})

//Get all
const fetchDogs = () => {
    fetch('http://localhost:3000/dogs')
    .then(Response => Response.json())
    .then(dogsData => dogsData.forEach(renderDogs))

}
//Render
const renderDogs = (dogs) => {
    let tableBody = document.getElementById('table-body')
    let tableRow = document.createElement('tr')
    tableRow.className = 'dog-name'

    let tableDataName = document.createElement('td')
    tableDataName.textContent = dogs.name

    let tableDataBreed = document.createElement('td')
    tableDataBreed.textContent = dogs.breed

    let tableDataSex = document.createElement('td')
    tableDataSex.textContent = dogs.sex

    let editButton = document.createElement('button')
    editButton.textContent = 'Edit Dog'
    editDog(editButton)

    tableRow.append(tableDataName, tableDataBreed, tableDataSex, editButton)
    tableBody.append(tableRow)
}

const editDog = (editButton) => {
    editButton.addEventListener('click', (e) => {
        document.querySelector('dog-form').elements.name.value
        document.querySelector('dog-form').element
        document.querySelector('dog-form').element
    })
}
