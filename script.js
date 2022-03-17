let body = document.getElementById("body")
let div = document.createElement("div")
let imagemInterruptor= document.createElement("img")
imagemInterruptor.setAttribute("src", "desligado.png")
let lampada = document .createElement("img")
lampada.setAttribute("src", "desligada.png")

body.style.backgroundColor="black"
lampada.style.paddingLeft="20vw"
lampada.style.paddingBottom="50vh"
imagemInterruptor.style.paddingLeft="15vw"
imagemInterruptor.style.paddingTop="10vh"

body.appendChild(div)
div.appendChild(imagemInterruptor)
div.appendChild(lampada)

imagemInterruptor.onclick = function(){
    if(imagemInterruptor.src.match("desligado.png")){
        imagemInterruptor.src="ligado.png"
        lampada.src="ligada.png"
        body.style.backgroundColor="yellow"
    }
    else{
        imagemInterruptor.src="desligado.png"
        lampada.src="desligada.png"
        body.style.backgroundColor="black"
    }
}