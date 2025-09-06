const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach((val) => {
    console.log(val);
    
});


coding.forEach((val,index,arr)=>{
    console.log(val,index,arr);
    
})

const arr = [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"pythin",
        languageFileName: "py"
    }
]

arr.forEach( (item) => {
    console.log(item.languageName);
    
} )