document.querySelector('button').addEventListener('click', makeReq)

function makeReq(){
  const word = document.querySelector('input').value
  fetch(`/palindrome/${word}`) 
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    document.querySelector('#result').innerText = data.isPalindrome
  })
}
  
    // .then(response => response.json())
    // .then((data) => {
    //   console.log(data);
    //   // document.querySelector('#result').innerText = data.isPalindrome ? 'This is a Palindrome' : 'It is not a Palindrome, try another word'
    // });




