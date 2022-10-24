// Struktur data untuk pesanan
// const dataPesanan = {
//     "peserta": "",
//     "materi": {
//         "jenjang": "",
//         "topik": "",
//         "detail": ""
//     },
//     "waktu": {
//         "tanggal": "",
//         "mulai": "",
//         "selesai": ""
//     },
//     "lokasi": "",
//     "tambahan": "",
//     "userID": "",
//     "teacherID": ""
// }

// Mengambil input form pesanan dari user
const ambilPesanan = () => {

    let topikSelect = document.getElementById("select-topik");

    const dataPesanan = {
        "peserta": document.querySelector('input[name="peserta-les"]:checked').value,
        "materi": {
            "jenjang": document.querySelector('input[name="pendidikan"]:checked').value,
            "topik": topikSelect.options[topikSelect.selectedIndex].value,
            "detail": document.getElementById("detail-topik").value
        },
        "waktu": {
            "tanggal": document.getElementById("date").value,
            "mulai": document.getElementById("mulai").value,
            "selesai": document.getElementById("selesai").value
        },
        "lokasi": document.querySelector('input[name="lokasi"]:checked').value,
        "tambahan": document.getElementById("info-tambahan").value,
        "userID": JSON.parse(localStorage.getItem("user_login")).id,
        "teacherID": JSON.parse(localStorage.getItem("pengajar_terpilih")).id,
        "teacherName": JSON.parse(localStorage.getItem("pengajar_terpilih")).nama
    }

    return dataPesanan
}

document.getElementById("btn-pesan").addEventListener("click", (ev) => {
    ev.preventDefault();
    postTeacher("https://634a01375df95285140a732e.mockapi.io/order", ambilPesanan());
});

// Mengirim data pesanan ke API
function postTeacher(url, input) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()).catch(err => console.log(err)).then(() => window.location.href = './daftar-sesi.html');
} 