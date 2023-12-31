let newbtn=document.querySelector("#btn");

newbtn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let getcolor=getRandom();
    h3.innerText=getcolor;
    let box=document.querySelector(".box");
    box.style.backgroundColor=getcolor;

    console.log("color updated");
})
function getRandom(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}
