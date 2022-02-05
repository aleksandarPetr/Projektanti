export class Projektant {

    constructor(ime, prezime, brojLicence) {
        this.ime = ime
        this.prezime = prezime
        this.brojLicence = brojLicence
    }

    procitajIme() {
        return `${this.ime} ${this.prezime}`
    }

    podesiIme(ime, prezime) {
        this.ime = ime
        this.prezime = prezime
    }

    ispisiPodatke() {
        let podaci = `Projektant: ${this.ime}\nPrezime: ${this.prezime}\nBroj Licence: ${this.brojLicence}`
        return podaci
    }

    uzmiBrojLicence() {
        return this.brojLicence
    }
}

const projektant = new Projektant('Petar', 'Petric', '323 4567 89')
// console.log(projektant.uzmiBrojLicence())
// console.log(projektant.ispisiPodatke())
// console.log(projektant.procitajIme())
