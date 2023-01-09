function alternate(string) {
    let char = [...new Set(Array.from(string))]; 
    let array = Array.from(string);
    
    let maxPattern = 0;
   
    for(let i = 0; i< char.length; i++){
 
        let firstElement = char[i]; 
 
        for(let j = 0; j < char.length; j++){
        let secondElement = char[j];
 
            let element = array.filter(filteredEl=> {
                return filteredEl === firstElement || filteredEl === secondElement
            }).join('');
  
            if(element.indexOf(firstElement+firstElement) === -1 && element.indexOf(secondElement+secondElement) === -1){               
                maxPattern = Math.max(maxPattern, element.length);
            }
        }
    }
    
    return maxPattern;
}

let x = alternate('asvkugfiugsalddlasguifgukvsa')
console.log(x)
