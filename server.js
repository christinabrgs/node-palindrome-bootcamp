
const Express = require('express');
const app = Express();
const PORT = 8000

  app.set('view engine', 'ejs')

  app.use(Express.static('public'));

  // app.use(bodyParser.urlencoded({ extended: true }))

  app.get ('/', (req, res) =>{
    res.render ('index.ejs', {})
  })

  app.get('/palindrome/:word',(request,res)=>{
    let word =  request.params.word.toLowerCase()
    let arrWord = word.split('').reverse().join('')
    if( word === arrWord ){
        res.json({
          isPalindrome: 'true'
        })
        // response.render ('index.ejs', {palindrome})
    }else {
        res.json({
          isPalindrome: 'false'
        })
        // response.render ('index.ejs')
    }
  })

   

  // else if (page == '/') {
  //   fs.readFile('index.html', function(err, data) {
  //   res.writeHead(200, { 'content-type': 'text/html' })
  //   res.write(data)
  //   res.end()
  //   });
  // }
  // else if (page === '/palindrome') { // creates a coin page
  //   let word =  params.word
  //   let arrWord = word.split('').reverse().join('')
   
  //   res.writeHead(200, {'Content-Type': 'application/json'}); // 200 = everything is good, tells the browser how to read the data it is receiving
  //   // res.write(data) - where you write your data
  //   res.end(JSON.stringify({ // sends response to server written out as JSON, anything within JSON stringify can be used as query paramaters
  //     isPalindrome: word === arrWord
  //   }
  //   ));
  // }
  // else if (page == '/js/main.js'){
  //   fs.readFile('js/main.js', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/javascript'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else {
  //   res.writeHead(404, { 'content-type': 'text/html' })
  //   res.write('<h1>404 not found</h1>')
  //   res.end() // ends the server response
  // }
  // fs.createReadStream('index.html').pipe(res)
//   console.log(page, params)
// })

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
