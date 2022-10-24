
const dataPesanan = {
    "peserta": "",
    "materi": {
        "jenjang": "",
        "topik": "",
        "detail": ""
    },
    "waktu": {
        "tanggal": "",
        "mulai": "",
        "selesai": ""
    },
    "lokasi": "",
    "tambahan": "",
    "userID": "",
    "teacherID": ""
}



const ambilPesanan = () => {
    // let peserta = document.querySelector('input[name="peserta-les"]:checked').value;
    // let jenjang = document.querySelector('input[name="pendidikan"]:checked').value;
    let topikSelect = document.getElementById("select-topik");
    // let topik = topikSelect.options[topikSelect.selectedIndex].value;
    // let detailTopik = document.getElementById("detail-topik").value;
    // let tanggal = document.getElementById("date").value;
    // let jamMulai = document.getElementById("mulai").value;
    // let jamSelesai = document.getElementById("selesai").value;
    // let lokasi = document.querySelector('input[name="lokasi"]:checked').value;
    // let infoTambahan = document.getElementById("info-tambahan").value;
    // let IDPengajar = JSON.parse(localStorage.getItem("pengajar_terpilih")).id;
    // let IDUser = JSON.parse(localStorage.getItem("user_login")).user_id;

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

function postTeacher(url, input) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err)).then(() => window.location.href = './daftar-sesi.html');
} 