/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length == "") return "";

  let count = {};
  let window = {};
  let result = []
  let resultLength = 0
  let have = 0
  let need = t.length


  for (let char of t) {
    count[char] = count[char] ? count[char] + 1 : 1;

  }

  s.forEach(char => {
      window[char] = window[char] ? window[char] : 1;

      if(count.hasOwnProperty(char) && window[char] === count[char]) {
          have += 1
      }

      while(have === need) {
          
      }
  })
};
