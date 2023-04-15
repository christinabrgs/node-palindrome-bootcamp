document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  fetch(`/palindrome`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#result').innerText = data.value
    });
}



document.querySelector('button').addEventListener('click', makeReq)