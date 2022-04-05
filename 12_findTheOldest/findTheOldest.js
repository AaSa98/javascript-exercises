function findTheOldest(people) {
  //bildet Array aus Objekt people
  peopleArr = Array.from(people);
  peopleArr.forEach((human) => {
    //überprüft, ob jede Person ein Todesjahr hat, falls nicht, nimmt sie das aktuelle Jahr, weil Person ja dann so alt ist (nach dieser einfachen Rechnung)
    if (!human.yearOfDeath) {
      human.yearOfDeath = new Date().getFullYear();
    }
  });

  //.sort lässt Person mit größter Differenz aus yearOfDeath-yearOfBirth an erste Stelle des Arrays wandern
  peopleArr.sort((a, b) =>
    a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1 : -1
  );
  return peopleArr[0];
}

// Do not edit below this line
module.exports = findTheOldest;
