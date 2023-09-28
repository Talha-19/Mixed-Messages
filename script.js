const luckyNumber = [7, 10, 19, 33, 23, 17];
const luckyColour = ['Blue', 'Red', 'Green', 'Pink', 'Purple'];
const luckyPet = ['Dog', 'Cat', 'Hamster', 'Parrot', 'Rabbit'];

function findYourLuck() {
    const randomNumber = luckyNumber[Math.floor(Math.random() * luckyNumber.length)];
    const randomColour = luckyColour[Math.floor(Math.random() * luckyColour.length)];
    const randomPet = luckyPet[Math.floor(Math.random() * luckyPet.length)];

    return
    `Your lucky number is ${randomNumber}
     Your lucky colour is ${randomColour}
     Your lucky pet is ${randomPet}`
};


const yourLuck = findYourLuck();
console.log(yourLuck);