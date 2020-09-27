const numberInputRef = document.querySelector('.number'); //ссылка на кусок кода в Index.html
const powerInputRef = document.querySelector('.power'); //ссылка на кусок кода в Index.html

console.log(typeof numberInputRef.value); //инпут это всегда СТРОКА   .value - это число или текст (наполнение input пользователем )
console.log(typeof powerInputRef.value); //инпут это всегда СТРОКА

const buttonRef = document.querySelector('.button'); //ссылка на кусок кода в Index.html

console.log(buttonRef);

buttonRef.addEventListener('click', () => {
  const number = Number(numberInputRef.value); //строку в число
  const power = Number(powerInputRef.value); //строку в число
  console.log('numberInputRef.value: ', number); //виводим уже число
  console.log('powerInputRef.value: ', power);
});
