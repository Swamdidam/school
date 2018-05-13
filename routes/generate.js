function randomElement (array) {
    return array[Math.floor(Math.random() * array.length)];
            }
            
            var characters = '1234567890'.split(''),
                result = '';
            for (var i = 0; i < 11; i++) {
                result += randomElement(characters);
            }

var mat = result;
console.log(mat)