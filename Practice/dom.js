function changeText ()
{
    const head = document.querySelector("#heading");
    head.innerText = "Dom Manipulation file"
    head.style.backgroundColor= "Red"
    head.style.color = "Green"
   const div = document.createElement("p")
    div.innerText = "hi i am deepak singh"
    document.querySelector("#container").appendChild(div)
}  

 