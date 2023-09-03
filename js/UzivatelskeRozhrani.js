class UzivatelskeRozhrani {
    constructor(manager) {
        this.manager = manager;
        this.form = document.getElementById("pojistenci");
        this.pojistenciTable = document.getElementById("pojistenci-body");

        this.form.addEventListener("submit", this.sendForm.bind(this));
        this.renderPojistenci();
    }

    sendForm(event) {
        event.preventDefault();
    
        const jmenoInput = document.getElementById("inputJmeno");
        const prijmeniInput = document.getElementById("inputPrijmeni");
        const vekInput = document.getElementById("inputVek");
        const telefonInput = document.getElementById("inputTelefon");
        
        const jmeno = jmenoInput.value;
        const prijmeni = prijmeniInput.value;
        const vek = vekInput.value;
        const telefon = telefonInput.value;
    
        
        this.manager.pridejPojistence(jmeno, prijmeni, vek, telefon);
        
        jmenoInput.value = "";
        prijmeniInput.value = "";
        vekInput.value = "";
        telefonInput.value = "";
        
        
        this.renderPojistenci();;
    }

    renderPojistenci() {
        this.pojistenciTable.innerHTML = "";
  
        this.manager.vratPojistence().forEach(pojistenec => {
        const row = document.createElement("tr");
        
        const nameSurnameCell = document.createElement("td");
        nameSurnameCell.textContent = pojistenec.toString(); // Spojujeme jméno a příjmení

        const ageCell = document.createElement("td");
        ageCell.textContent = pojistenec.toStringAge();

        const phoneCell = document.createElement("td");
        phoneCell.textContent = pojistenec.toStringPhone();
    
        row.appendChild(nameSurnameCell);
        row.appendChild(phoneCell);
        row.appendChild(ageCell);
        
        this.pojistenciTable.appendChild(row);
         });
    }
}

const manager = new PojistenciManager();
const uzivatelskeRozhrani = new UzivatelskeRozhrani(manager);