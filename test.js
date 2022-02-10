const betterCompression = (string) => {
    const hashMap = {}
    
    let start = 0

    
    
    while(start < string.length) {
        let char = string[start]
        let l = start
        let r = l + 1
        let numberToAdd = 0

        //  because Javascript
        while(!isNaN(string[r])) {
            numberToAdd += string[r]
            l++
            r++
        }

        l++

        if (!hashMap.hasOwnProperty(char)) {
            hashMap[char] = Number(numberToAdd)
        } else {
           
            hashMap[char] = Number(hashMap[char]) + Number(numberToAdd)
            
        }

        start = l
    }

    return Object.keys(hashMap).sort().reduce((memo, currentKey) => {
        return memo += `${currentKey}${hashMap[currentKey]}`
    }, "")
};  