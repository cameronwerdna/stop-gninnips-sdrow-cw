//takes a string of words and returns the string w/any 5 character+ words reversed.
function spinWords(string){
    let newArr = []
    string = string.split(' ')
    for (let i = 0; i < string.length; i++) {
      if (string[i].length > 4) {
        newArr.push(string[i].split('').reverse().join('')) 
      } else {
        newArr.push(string[i])
      }
    }
    return newArr.join(' ')
  }


console.log(spinWords('this is a test sentence')) // => 'this is a test ecnetnes'
console.log(spinWords('hi everybody how are you all doing')) // => 'hi ydobyreve how are you all gniod'
console.log(spinWords('how about a round of applause for such a great performance by the orchestra')) // => how tuoba a dnuor of esualppa for such a taerg ecnamrofrep by the artsehcro