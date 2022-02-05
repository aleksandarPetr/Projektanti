import { Tip } from "./Tip.js";
import { Projektant } from "./Projektant.js";

export class Projekat {

    constructor(ime, glavniProjektant) {
        this.ime = ime
        this.glavniProjektant = glavniProjektant
        this.projektanti = new Map
    }

    dodajProjektanta(imeProjektanta, projektant) {
        this.projektanti.set(imeProjektanta, projektant)
    }

    brojProjektanata() {
        return this.projektanti.size
    }

    uporediProjektante(proizvoljniProjektant, posmatraniProjektant) {
        if(proizvoljniProjektant.uzmiBrojLicence() === posmatraniProjektant.uzmiBrojLicence()) {
            return `Projektanti imaju istu licencu`
        } else {
            return `Projektanti nemaju istu licencu`
        }
    }

    ispisiPodatkeOSvimProjektantima() {
        let string = `Podaci o svim projektantima:\n\nGlavni projektant:\n\n${this.glavniProjektant.ispisiPodatke()}\n\nOstali projektanti:\n\n`
        for(const [key, value] of this.projektanti) {
            string += `${value.ispisiPodatke()}\n\n`
        }
        return string
    }

    izdajProjektanteSaZadatimTipomLicence(tip) {
        const trazeniProjektanti = []
        // probao sam da iskoristim metodu iz class-e String ali konzola je javljala gresku kako izbaciTip() nije funkcija!!?! iskoristio sam onda slice()
        for(const [key, value] of this.projektanti) {
            const tipLicence = value.uzmiBrojLicence().slice(0, 3)
            if(tipLicence === tip) {
                trazeniProjektanti.push(key)
            }
        }
        return trazeniProjektanti
    }

    nepotizam(tipLicence) {
        let count = 0
        for(const [key, value] of this.projektanti) {
            if((this.glavniProjektant.prezime === value.prezime) && (value.brojLicence.slice(0, 3) === tipLicence)) {
                count++
            }
        }
        return `Broj projektanata sa zadatom licencom koji imaju isto prezime kao glavni projektant je ${count}`
    }

}

const projektant1 = new Projektant('Petar', 'Petric', '323 4567 89')
const projektant2 = new Projektant('Marko', 'Simonovic', '120 3555 71')
const projektant3 = new Projektant('Simon', 'Ivanovic', '003 2111 17')
const projektant4 = new Projektant('Vladimir', 'Djokovic', '321 3555 07')
const projektant5 = new Projektant('Milos', 'Matic', '300 7717 90')
const projektant6 = new Projektant('Radovan', 'Petric', '300 7957 99')
const projektant7 = new Projektant('Ivan', 'Petric', '300 1015 88')


const projekat1 = new Projekat('Moskva', projektant1)

projekat1.dodajProjektanta('Marko Simonovic', projektant2)
projekat1.dodajProjektanta('Simon Ivanovic', projektant3)
projekat1.dodajProjektanta('Vladimir Djokovic', projektant4)
projekat1.dodajProjektanta('Milos Matic', projektant5)
projekat1.dodajProjektanta('Radovan Petric', projektant6)
projekat1.dodajProjektanta('Ivan Petric', projektant7)



// console.log(projekat1.uporediProjektante(projektant3, projektant5))
// console.log(projekat1.ispisiPodatkeOSvimProjektantima())
// console.log(projekat1.izdajProjektanteSaZadatimTipomLicence('300'))
// console.log(projekat1.projektanti)
// console.log(projektant3.ispisiPodatke())
// console.log(projekat1.nepotizam('300'))

//
// Nisam siguran da li zadnja dva zadatka traze rad sa superclassama!?!
//
