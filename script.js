const textArea = document.getElementById("texto_inicial");
const btnEncriptar= document.getElementById("encriptar");
const btnDesencriptar= document.getElementById("desencriptar");
const btnCopiar= document.getElementById("copiar");
//'La letra "e" es convertida para "enter"'
//'La letra "i" es convertida para "imes"'
//'La letra "a" es convertida para "ai"'
//'La letra "o"es convertida para "ai"'
//'La letra "u" es convertida para "ufat"'


const encriptar=()=>{
const encriptado= textArea.value.replace(/[aeiou]/g, function(match){
   if(match==="a")return "ai"  
   if(match==="e")return "enter"  
   if(match==="i")return "imes"  
   if(match==="o")return "ober"  
   if(match==="u")return "ufat" 
})
document.getElementById("mensaje_final").innerHTML=encriptado;
document.getElementById("texto_inicial").value="";

}

const desencriptar=()=>{
let desencriptar=[/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
let desencriptador=["e","i","a","o","u"];
let textoEncriptado=textArea.value;
for (let i=0; i<textoEncriptado.length;i++){
   textoEncriptado=textoEncriptado.replace(desencriptar[i],desencriptador[i]);
   
}
console.log(textoEncriptado)
const texto=textoEncriptado
document.getElementById("mensaje_final").innerHTML=texto;
document.getElementById("texto_inicial").value="";
}

const copiar=()=>{
const resultado=document.getElementById("mensaje_final");
resultado.select()
document.execCommand("copy")
alert("mensaje copiado")
}

btnEncriptar.addEventListener('click',encriptar);
btnDesencriptar.addEventListener('click',desencriptar);
btnCopiar.addEventListener('click',copiar)