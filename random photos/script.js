const imageConEL = document.querySelector(".image-container");
const btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>addImages());
function addImages(){
    for(let i = 0; i<7; i++){
        const ele = document.createElement("img");
        ele.classList.add("img");
        ele.src = `https://picsum.photos/300?random=${Math.random()*2000}`
        imageConEL.appendChild(ele);
    }
}
addImages();