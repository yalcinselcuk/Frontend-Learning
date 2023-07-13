alert("Hello");
alert("World");

// değişken tanımlama 
let firstName = "yalçın";
alert(firstName);

var lastName = "selçuk";
alert(lastName);

// sabit tanımlama
const dogumTarihim = "19.08.1999";
alert("doğum tarihim : "+dogumTarihim);

const memleket = "malatya";
alert(memleket);

// dolar isareti ile degiskenleri gosterme
var dnm = "deneme";
alert(` tırnak içinde dolar işareti ${dnm} `);
// dolar sembolünü kesme işareti içinde kullanabiliriz


// boolean ifade kullanımı
let dogru = true;
let yanlis = false;

alert(`boolean ${dogru} ile boolean ${yanlis} ekrana bastirildi`);

//tip dönüşümleri
let value = true;
alert(typeof(value));

let sValue = String(value);
alert(typeof(sValue));
//diğer tip dönüşümleri de aynı şekilde 
//önüne değer tipi verilince type conversion olmuş oluyor


mesajGoster();
function mesajGoster(){
    alert("func denemesi");
}