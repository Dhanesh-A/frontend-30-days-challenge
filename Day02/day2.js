let tech = ['React', 'js', 'html', 'css'];
let newTechs = [...tech,'Graphql','redux'];
console.log(newTechs)

let bioData = {
    name: 'Dhanesh A',
    age:25,
    city:'chennai'
}

const{name,age,city} = bioData;
console.log(`I am ${name} from ${city} and my age is ${age}`);