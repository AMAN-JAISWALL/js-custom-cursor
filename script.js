let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");

container.addEventListener("mousemove",(data)=>{
    // console.log(data.x);
    cursor.style.left = data.x+"px";
    cursor.style.top =data.y+"px";
})

