
// 1) Scrivi un programma che stampi i numeri da 1 a 100,
for (var i = 1; i <= 1000; i++) {
  // 2) ma per i multipli di 3 stampi “Fizz” al posto del numero e
  if (i%3 == 0) {
    console.log(i);
  }
  // 3)per i multipli di 5 stampi Buzz.
  else if (i%5 == 0) {
    console.log(i);
  }
  // 4)Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
  else if ((i%5 == 0)&&(i%3 == 0)) {
    console.log();
  }
}
