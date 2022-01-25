const longestPalindrome = function (s) {
  let result = "";
  let longestLength = 0;

  const determinePalindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > longestLength) {
        result = s.substring(left, right + 1);
        longestLength = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    //odd length
    determinePalindrome(left, right);
    
    //even length
    determinePalindrome(left, right + 1);
  }

  return result;
};

console.log(longestPalindrome("bababa"));
