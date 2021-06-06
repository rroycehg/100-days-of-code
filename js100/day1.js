// insert code here

console.log("%c My name is baby gee", "color: Orange")

let newPtext = ["Hello, my name is", "Baby Gee", "and I like FFXIV"]
replaceOldP()
//Take each element of the array newPtext and insert into each of
//the HTML target elements of <p>



function replaceOldP(){
    const oldP = document.querySelectorAll(`main div p`)
    
     oldP.forEach( (e, x) => {
        e.textContent = newPtext[x]
        
    }) 

     /* for(i =0; i < oldP.length; i++ ){
        oldP[i].textContent = newPtext[i]
        
    } */
//This for loop is the same as the forEach() above

}