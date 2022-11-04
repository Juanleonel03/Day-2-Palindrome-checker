/*README

in the regex constant we use an expression /[\W_]\g

where \W means that it will match any character that is not a word. [^A-Za-z0-9_]
'_' is used after the W to say that it is a specific case.
finally we have the flag (g); with this we indicate that it will be a global search.

in this site you will know more about regular expressions or regexp. 
https://eloquentjavascript.net/09_regexp.html
https://es.javascript.info/regexp-introduction
_______________________________________________________________________________________________

en la constante regex usamos una expresión /[\W_]\g

donde \W significa que va a coincidir con cualquier carácter que no sea una palabra. [^A-Za-z0-9_]
se usa '_' después de la W para decir que es un caso especifico.
por último tenemos la bandera (g); con esto indicamos que será una búsqueda global.

en este sitio sabrás mas acerca de las expresiones regulares o regexp
https://es.javascript.info/regexp-introduction

*/ 
const palindrome = (word) =>{
  const regex = /[\W_]/g;
  const lowerCase = word.toLowerCase().replace(regex, '');
  const reverseWord = lowerCase.split('').reverse().join('');

  return reverseWord === lowerCase;
}
const input = document.getElementById('input')
const boxCheck = document.getElementById('box-answer')
input.addEventListener('change', ()=>{
  if(palindrome(input.value) == true){
    boxCheck.innerHTML = `<h2>${input.value}</h2>
    <p>is a palindrome</p>`
  }else{
    boxCheck.innerHTML = `<h2>${input.value}</h2>
    <p>is not a palindrome</p>`
  }
  if(input.value === ''){
    boxCheck.innerHTML = '';
  }
})




