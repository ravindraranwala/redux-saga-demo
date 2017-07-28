export function getStudents() {
    return fetch('http://www.mocky.io/v2/597ade4b1200008404696c6b')
    .then(students => students.json().then(data => {
        return data})).catch(e => {throw e})
}
