
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//MANIPULATE DOM

//call coloredReindeerBuilder() from createArray.js
coloredReindeerBuilder()

//reference colored-reindeer article
const article = document.getElementById("colored-reindeer")

//loop through colored reindeer array
for(let i=0; i < coloredReindeer.length; i++){

//add new section for each reindeer to HTML as child of "colored-reindeer" article
article.innerHTML += `<section style="color: ${coloredReindeer[i].color};"> ${coloredReindeer[i].name} </section>`

}