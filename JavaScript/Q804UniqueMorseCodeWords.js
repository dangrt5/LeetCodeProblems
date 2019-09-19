/**
 * @param {string[]} words
 * @return {number}
 */
dict = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..'
}

const uniqueMorseRepresentations = words => {
  const morseArr = words.map(word => {
    return word.split('').reduce((morse, el) => (
      morse += dict[el]
    ), '')
  })
  
  return new Set([...morseArr]).size
};