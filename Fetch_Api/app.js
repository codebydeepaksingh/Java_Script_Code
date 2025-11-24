const myURL = "https://catfact.ninja/facts";

const factPara = document.querySelector("#fact")




async function getFacts() {
    console.log("getting data......"); 
    let response = await fetch(myURL);
    console.log(response);
    let data = await response.json();
    console.log(data.data[2].fact);
    // factHead.innerText = data.data[2].fact;
}

getFacts();



