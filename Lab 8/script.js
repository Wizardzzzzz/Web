let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim", "Jason"];
for (let i = 0; i < names.length; i++)
{
    if (names[i].charAt(0) === "J" || names[i].toLowerCase().charAt(0) === "j")
    {
        speakBye(names[i]);
    } else
        {
        speakHello(names[i]);
    }
}
console.log("Якщо довжина розбитого на символи масиву names_first_split менша за довжину нашого початковго масиву names_first тоді виводиться GoodBye")
let names_first = ["Jason", "Laura", "Evelina", "Bill", "Mike"];
console.log("Початковий масив: " + names_first + " Довжина масиву: " + names_first.length);
for (let j = 0; j < names_first.length; j++)
{
    let names_first_split = names_first[j].split('');
    console.log("Довжина розбитого масиву: " + names_first_split.length);
    if (names_first_split.length < names_first.length)
    {
        speakBye(names_first_split);
    } else
        {
        speakHello(names_first_split);
    }
}