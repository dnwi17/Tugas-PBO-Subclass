class Kapal {
    constructor(nama, jenis, panjang, lebar){
        this.nama = nama,
        this.jenis = jenis,
        this.panjang = panjang,
        this.lebar = lebar
    }
    infoKapal(){
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`
}
}
class kapalPenumpang extends kapal {
    constructor(nama, jenis,panjang, lebar, kapasitasPenumpang){
        super(nama, jenis, panjang, lebar)
        this.kapasitasPenumpang = kapasitasPenumpang
    }

}
const kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 200, 100);
const kapalPesiar = new Kapal("Titanic", "Pesiar", 300, 100);

console.log(kapalPenumpang.infoKapal());
console.log(kapalPesiar.infoKapal());