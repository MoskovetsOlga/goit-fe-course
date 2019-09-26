// 3. Задача 3
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов
// PS: используй switch


const priceForChina = 100;
const priceForSouthAmerica = 250;
const priceForAustralia = 170;
const priceForIndia = 80;
const priceForJamaica = 120;

let deliveryCountry = prompt("Введите название вашей страны для доставки");
 if(deliveryCountry === null) {
     alert('Отменено пользователем!');
 } else {
     switch(deliveryCountry.toLocaleLowerCase()) {
         case 'китай': alert(`Доставка в ${deliveryCountry} будет стоить ${priceForChina} кредитов`);
         break;
         case 'южная америка': alert(`Доставка в ${deliveryCountry} будет стоить ${priceForSouthAmerica} кредитов`);
         break;
         case 'австралия': alert(`Доставка в ${deliveryCountry} будет стоить ${priceForAustralia} кредитов`);
         break;
         case 'индия': alert(`Доставка в ${deliveryCountry} будет стоить ${priceForIndia} кредитов`);
         break;
         case 'ямайка': alert(`Доставка в ${deliveryCountry} будет стоить ${priceForJamaica} кредитов`);
         break;
         default: alert('В вашей стране доставка не доступна')
     }
 }