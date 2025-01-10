const orang  = {
    nama : "Dini",
    alamat : "Serang",
    usia : "21"
}

console.log(orang.nama)
console.log(orang.alamat)
console.log(orang.usia)
console.log(orang.jk)

console.log( Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`)

document.getElementById("objek").innerHTML = `Nama saya ${orang.nama}, saya berasal dari ${orang.alamat}, berjenis kelamin ${orang.jk} dan sekarang berusia ${orang.usia} tahun`

console.log(orang.kendaraan.mobil1)
console.log(orang.kendaraan.mobil2
console.log(orang.kendaraan.motor)
console.log(orang.kendaraan.pesawat)

const mahasiswa = {
    namaDepan: "Dini",
    namaBelakang: "Andini",
    namaLengkap: function(){
        return '${this.namaDepan} ${this.namaBelakang}'
        }
    }

    console.log(mahasiswa.namaLengkap());

    function mahasiswaSIK(nama, kelas, angkatan){
        this.nama = nama,
        this.kelas = kelas,
        this.angkatan = angkatan
    }

    const