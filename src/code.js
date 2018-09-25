import axios from 'axios'
import _ from 'lodash'

const first = (n) => {
  for(let i=1;i<=n;i++){
    const isMultipleOf3 = i%3 == 0
    const isMultipleOf5 = i%5 == 0

    if(isMultipleOf3 && isMultipleOf5){
      console.log('FizzBuzz')
    }else if(isMultipleOf3){
      console.log('Fizz')
    }else if(isMultipleOf5){
      console.log('Buzz')
    }else{
      console.log(i)
    }
  }
}

const second = (data) => {
  for(let i=0; i<data.length; i++){
    let valid = true;
    let line = data[i]

    if(line%2 == 1) {
      valid = false
      continue
    }
    const stack = []
    for(let j=0; j<line.length; j++){

      let char = line[j]

      switch (char) {
        case '[':
        case '{':
        case '(':
          stack.push(char)
          break;
        default:
          if(j==0){ //first character is either } ] or ) => invalid grouping
            valid = false
            break;
          }

          if(char === ']' && stack[stack.length-1] ==='[' ||
             char === '}' && stack[stack.length-1] ==='{'||
             char === ')' && stack[stack.length-1] ==='('){
               stack.pop()
               break;
             } else {
               valid = false
               break;
             }
      }
    }

    console.log(valid ? 'YES' : 'NO')
  }
}

const third = async (name) => {
  const movies = await axios(`https://jsonmock.hackerrank.com/api/movies/search?Title=${name}`)

  const results = await Promise.all(
    Array(movies.data.total_pages).fill().map((element, index) => {
      console.log('calling api get ')
      return axios(`https://jsonmock.hackerrank.com/api/movies/search?Title=Spiderman&page=${index}`)
    })
  )

  const titles = results.splice(1)
                          .map((el) => el.data['data'])
                          .flatten()
                          .map((el) => el['Title'])

  console.log(_.orderBy(titles,[title => title.toLowerCase()]))
}

const forth = (n,k,l) => {
  if(n-k<=0) return 0

  //
}

export {
  first,
  second,
  third,
  forth
}
