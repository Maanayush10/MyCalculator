let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('.stringIP').value = string;
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('.stringIP').value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.slice(0, -1);
      document.querySelector('.stringIP').value = string;
    }
    else if (e.target.innerHTML == 'SQRT') {
        string = Math.sqrt(string);
        document.querySelector('.stringIP').value = string;
      }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('.stringIP').value = string;
    }
  })
})