const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//problem #2
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let userLanguages = users.filter((user)  => user.languages.length >= 3);
console.log('problem #2' , userLanguages);

//#3
//Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map((user) => user.email)
console.log('problem #3', userEmails);

//#4
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let userYears = users.reduce((previousValue, currentValue)=> previousValue + currentValue.yearsOfExperience, 0)
console.log('problem#4', userYears)

//#5
 let userLongEmail  = users.reduce((previousValue,currentValue) =>{
        if (currentValue.email.length > previousValue.length){
            previousValue = currentValue.email
        }
        return previousValue
    }
    ,'')
console.log('problem #5', userLongEmail);

//#6
//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let arrayOfNames = []
for (let i = 0; i < users.length; i++){
    arrayOfNames.push(users[i].name)
}
console.log(arrayOfNames)

let listOfUsersNames = arrayOfNames.reduce((previousValue,currentValue) => {
    console.log('Problem 6: Your instructors are: ' + arrayOfNames.join(', '))
})


