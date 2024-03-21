//QUESTION 43
function show_magicians(magicians: string[]): void{
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase()+magician.slice(1));
    }
}
function make_great2(magicians: string []): string[]{
    const greatMagicians: string[] =[];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i]    +  'the Great');
    }
    return greatMagicians;
}
const magicians3: string[] = ["usman", "saqib", "umer",];

const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

//QUESTION 44

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

//QUESTION 45

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
