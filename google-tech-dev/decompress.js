#!/usr/local/bin/node
'use-strict';

const case1 ='3[abc]4[ab]c'
const case2 = '10[a]'
const case3 = '2[3[a]b]'

// const compressionRegex = /(\d+\[\w+\])/g

function decompress (str = case2, memo = '', index = 0) {

  tokenize(str, index)
  let currentCharacter = str.charAt(index)
  let finalString = currentCharacter;
  const initialTokenType = charType(currentCharacter)
  let currentCharacterType = null
  let currentIndex = index
  do {
    currentIndex++;
    currentCharacter = str.charAt(currentIndex)
    currentCharacterType = charType(currentCharacter)
    if (currentCharacterType !== initialTokenType) {
      break;
    }

    finalString += currentCharacter


  } while (index < str.length)
  console.log(finalString)
  return [str, finalString, currentIndex]
}


function tokenize (str, index = 0) {

}


function charType(char) {
  if (char.match(/\d/)) return 'num'

  if (char.match(/\w/)) return 'letr'

  if (char.match(/\]/)) return 'open'

  if (char.match(/\[/)) return 'close'
}


console.log(decompress());