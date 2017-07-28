export function getStudents() {
    return fetch('http://www.mocky.io/v2/5979696c110000c6009edafd')
    .then(students => students.json()).catch(e => {throw e})
}