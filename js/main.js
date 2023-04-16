document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){
  let word = document.querySelector('input').value
  fetch(`/palindrome?word=${word}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#result').innerText = data.isPalindrome ? 'This is a Palindrome' : 'It is not a Palindrome, try another word'
    });
}



document.querySelector('button').addEventListener('click', makeReq)