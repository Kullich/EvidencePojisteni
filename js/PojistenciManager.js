class PojistenciManager {
    constructor() {
        this.pojistenci = this.nactiPojistenceZLocalStorae();
    }

    nactiPojistenceZLocalStorae() {
        const data = JSON.parse(localStorage.getItem("pojistenci")) || [];
        return data.map(d => new Pojistenec(d.name, d.surname, d.age, d.phone));
    }

    ulozPojistenceDoLocalStorage() {
        localStorage.setItem("pojistenci", JSON.stringify(this.pojistenci));
    }

    pridejPojistence(name, surname, age, phone) {
        const novyPojistenec = new Pojistenec(name, surname, age, phone);
        this.pojistenci.push(novyPojistenec);
        this.ulozPojistenceDoLocalStorage();
    }

    vratPojistence() {
        return this.pojistenci;
    }
}


