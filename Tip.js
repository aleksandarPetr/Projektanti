export class Tip {

    izbaciTip(string) {
        let aaa = string.slice(0, 3)
        let prviRazmak = string.slice(3, 4)
        let bbbb = string.slice(4, 8)
        let drugiRazmak = string.slice(8, 9)
        let cc = string.slice(9, 11)
        if((string.length === 11) && (!isNaN(aaa)) && (prviRazmak === ' ') && (!isNaN(bbbb)) && (drugiRazmak === ' ') && (!isNaN(cc))) {
            return aaa
        } else {
            return false
        }
    }
}

const string = new Tip()

// console.log(string.izbaciTip('323 4567 89'))

// Iz nekog razloga substring() metoda nece da radi unutar class-e pa sam koristio slice() metodu
