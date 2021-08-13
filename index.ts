// Import stylesheets
import './style.css';

import { Person } from './person';

// Write TypeScript code!
let person = new Person('Filipe', 'Gama', 'de Souza', 1987);
const appFullName: HTMLElement = document.getElementById('app.fullName');
appFullName.innerHTML = person.getFullName();
const appAge: HTMLElement = document.getElementById('app.age');
appAge.innerHTML = person.getBirthDayYear();
