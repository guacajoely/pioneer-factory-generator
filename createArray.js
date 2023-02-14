// In this exercise, you start with a collection of reindeer names. Your task is to add each reindeer name to an HTML article element with an id of colored-reindeer.

// After you read the instructions, your goal is to have three functions.

// 1. A generator function to yield colors.
const getNextColor = function* () {

    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

    for(let i=0; i < colors.length; i++){
        yield currentColor = colors[i]
    }
}

const getColor = getNextColor()


// 2. A factory function to build a new reindeer object. This function will need to use the generator.
const objectFactory = function (name) {

    return Object.create(null, {
        "name": { value: name, enumerable: true },
        "color": { value: getColor.next().value, enumerable: true },
    })
}
// The main builder function (see below) which will call the factory function and then place each object in an array.
// To start you off, paste in the following code into your JavaScript file.

const coloredReindeer = []

const coloredReindeerBuilder = function () {
    const reindeer =["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    // Write a for loop that looks at each reindeer
    for(let i=0; i<reindeer.length; i++){

        // Invoke factory function to create reindeer object
        let newReindeer = objectFactory(reindeer[i])

        // Put new reindeer object in coloredReindeer array
        coloredReindeer[i] = newReindeer
        
    }
    
    // Return coloredReindeer arrayclear
    return coloredReindeer

}


coloredReindeerBuilder()


console.log(coloredReindeer.length)
console.log(coloredReindeer[0].name)
console.log(coloredReindeer[0].color)


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//MANIPULATE DOM

const article = document.getElementById("colored-reindeer")

//loop through colored reindeer array
for(let i=0; i < coloredReindeer.length; i++){

//add new section for each reindeer to HTML as child of "colored-reindeer" article
article.innerHTML += `<section style="color: ${coloredReindeer[i].color};"> ${coloredReindeer[i].name} </section>`

}