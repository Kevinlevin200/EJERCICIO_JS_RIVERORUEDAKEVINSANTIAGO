function estaEquilibrado(expresion) {
  let pila = [];
  for (let i = 0; i < expresion.length; i++) {
    let c = expresion[i];
    if (c === '(' || c === '{' || c === '[') {
      pila.push(c);
    } else if (c === ')' || c === '}' || c === ']') {
      let ultimo = pila.pop();
      if (
        (c === ')' && ultimo !== '(') ||
        (c === '}' && ultimo !== '{') ||
        (c === ']' && ultimo !== '[')
      ) {
        return false;
      }
    }
  }
  return pila.length === 0;
}

document.getElementById('boton').addEventListener('click', function() {
  let expresion = document.getElementById('entrada').value;
  let resultado = estaEquilibrado(expresion);
  document.getElementById('resultado').textContent = resultado
    ? 'La expresión equilibrada'
    : 'Expresión NO equilibrada';
});
