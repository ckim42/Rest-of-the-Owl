/*run by typing "node demo.js" in terminal. Will print:
JavaScript is great
Elephants are large */

'use strict';
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
]

//es6 feature: object destructuring
function say({ subject, verb, object }) {
    //es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`)
}

//es6 feature: for..of
for(let s of sentences) {
    say(s)
}