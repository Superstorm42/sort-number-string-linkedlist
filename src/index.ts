import { NumbersCollection } from './numbersCollection';
import { CharactersCollection } from './charactersCollection';
import { LinkedList } from './linkedList';
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.Sort();

const charactersCollection = new CharactersCollection('XaaXAxaaNA');

charactersCollection.Sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(122);
linkedList.Sort();
linkedList.print();
console.log(numbersCollection.data);
console.log(charactersCollection);
