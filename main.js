//комент тих, хто не потрібен


(function () {
    console.log("Мова браузера:", window.clientInformation.language);
})();



const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const doubledNumbers = numbers.map(number => number * 2);
console.log("Подвоєні числа:", doubledNumbers);

const filteredNumbers = doubledNumbers.filter(number => number > 40);
console.log("Числа більше 40:", filteredNumbers);

const sum = filteredNumbers.reduce((acc, current) => acc + current, 0);
console.log("Сума чисел:", sum);




function sumAll(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log("Сума чисел з Rest:", sumAll(1, 2, 3, 4, 5));
console.log("Сума чисел з Rest:", sumAll(10, 20, 30));





const students = new Map();
students.set("Іван", 90);
students.set("Марія", 85);
students.set("Петро", 75);

for (const [name, score] of students) {
    console.log(`Студент: ${name}, Бал: ${score}`);
}






const person1 = { firstName: "Іван", lastName: "Коваленко" };
const person2 = { firstName: "Марія", lastName: "Шевчук" };

function greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
}

greet.call(person1);
greet.apply(person2);






function createCounterWithStart(startValue) {
    let counter = startValue;
    return function () {
        counter += 1;
        console.log("Лічильник:", counter);
    };
}

const counter1 = createCounterWithStart(5);
counter1();
counter1();
counter1();

const counter2 = createCounterWithStart(10);
counter2();
counter2(); 
