var container = document.getElementById("container");
var userInput = document.createElement("input"); 
var myDiv = document.createElement("div");

userInput.placeholder = "Type here..."
userInput.style.width = "100%";
userInput.style.height = "30px";
userInput.style.paddingLeft = "10px";
userInput.style.backgroundColor = "rgb(221, 217, 217)";
userInput.style.border = "none";
userInput.style.outline = "none";

myDiv.style.width = "auto";
myDiv.style.height = "auto";
myDiv.style.backgroundColor = "rgb(221, 217, 217)";
myDiv.style.display = "flex";
myDiv.style.alignItems = "center";
myDiv.style.padding = "20px";

userInput.style.margin = "10px 0";

container.appendChild(myDiv)
container.appendChild(userInput)


userInput.addEventListener('blur' , ()=>{
    
    myDiv.style.padding = "1px";

    for(i = 0; i < 1 ; i++){
        var myP = document.createElement("p");
        myDiv.appendChild(myP);
        var userContent = userInput.value;
        myP.innerText = userContent; 
        var btn = document.createElement("button");
        myDiv.appendChild(btn);
        btn.innerText = "x";
    }
    
    myP.setAttribute('style',
     'background-color: rgb(81,171,89); color: white; display: flex; justify-content: center; width: auto; padding: 6px 2px 6px 6px; margin-left: 5px');

     btn.setAttribute('style',
     'background-color: rgb(81,171,89); color: white; border: none; height: auto; padding: 7.5px; cursor:pointer;' );
     
     btn.addEventListener('click', ()=>{
         myP.style.display = "none";
         btn.style.display = "none";
         myDiv.style.padding = "1px"
        })
})

