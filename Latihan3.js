class Sensor{
    constructor(nama, lokasi){
        this.nama = nama,
        this.lokasi = lokasi,
        this._status = "Mati"
    }

    aktifkan(){
        this._status = "Aktif"
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah diaktifkan`
    }
    
    nonaktifkan(){
        this._status = "Mati"
        return `Sensor ${this.nama} di lokasi ${this.lokasi} telah dinonaktifkan`
    }

    getStatus(){
        return `Sensor ${this.nama} di lokasi ${this.lokasi} sedang dalam kondisi ${this._status}`
    }
}

const sensor Pasut = new Sensor("Pasut Selat Sunda", "Merak");
console.log(sensorPasut.aktifkan());
console.log(sensorPasut.getStatus());