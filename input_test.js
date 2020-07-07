"use strict";
//скрипт работы с инпутами с DOM
let valueArray = []; // сюда будут записываться значения что вводит пользователь
let textInputRef = document.querySelector(".user-input-form__input");
let buttonRef = document.querySelector(".user-input-form__submit-button");
let result_block_form = document.getElementById("result");
let str;

buttonRef.addEventListener("click", function() {
  if (textInputRef.value === "") {
    result_block_form.innerHTML = "<h2>Введите значение!</h2>";
    result_block_form.style.display = "block";
  } else {
    str = `${textInputRef.value}`;
    result_block_form.innerHTML = str;
    result_block_form.style.display = "block";
    valueArray.push(textInputRef.value);
    console.log(valueArray);
  }
});
