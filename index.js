function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}

function johnLennonFacts (facts) {
<<<<<<< HEAD
  var array = [];
  let i = 0;
 while (i < facts.length) {
  array.push(`${facts[i]}!!!`);
  i++;
}
return array;
}

function iLoveTheBeatles (n) {
  var array = [];
  do { array.push("I love the Beatles!");
    n++;
  } while (n < 15) 
  return array;
=======
  var array = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
    ];
  let i = 0;
 while (i < facts.length, i++) {
  array.push(i + "!!!");
}
return array;
>>>>>>> bb49245e1828b5e43f265ce301b777e87604a694
}