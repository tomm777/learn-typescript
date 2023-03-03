enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var MyShoes = Shoes.Nike;
console.log(MyShoes); // '나이키'

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
// 드롭다운으로 사용하기 용이 
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes){
        console.log('정답');
    }
    if (answer === Answer.No){
        console.log('오답');
        
    }
}
askQuestion(Answer.Yes);
askQuestion(Answer.No);

// askQuestion('yes');
