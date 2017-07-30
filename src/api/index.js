export function getStudents() {
    return fetch('http://www.mocky.io/v2/597e1a720f0000d50906ecb6')
    .then(students => students.json().then(data => {
        return data})).catch(e => {throw e})
}
