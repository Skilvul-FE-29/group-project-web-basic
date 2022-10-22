// Data dummy
const teacher1 = {
    nama: "Juliana Cameron",
    foto: "1-5L0-N4SRdDzQV5h6Re5pOEDc05FsRqH",
    edukasi: [
        {
            lokasi: "Universitas Gadjah Mada",
            jurusan: "Matematika"
        },
        {
            lokasi: "SMA Negeri 1 Klaten",
            jurusan: "Jurusan IPA"
        }
    ],
    alamat: {
        "kabupaten kota": "Sleman",
        provinsi: "DI Yogyakarta"
    },
    "bidang ajar": ["Matematika", "Kalkulus", "Statistika"],
    deskripsi: "Hai semuanya, aku adalah seorang mahasiswa matematika yang sangat tertarik pada dunia belajar mengajar. Aku memiliki pengalaman mengajar selama 6 bulan sebagai pengajar freelance dan sering mengikuti berbagai pelatihan softskill",
    pengalaman: [
        {
            posisi: "Freelance Mengajar",
            lokasi: "Independen",
            mulai: "Juli 2021",
            selesai: "Now",
            deskripsi: "Saya telah menjadi freelance untuk mengajar anak SD hingga SMA pada mata pelajaran matematika selama 1 tahun terakhir ",
        },
        {
            posisi: "Ketua Divisi Materi",
            lokasi: "HIMATIKA UGM",
            mulai: "September 2021",
            selesai: "Now",
            deskripsi: "Pada himpunan mahasiswa matematika, terdapat aktivitas pengajaran untuk masyarakat umum dan saya berperan untuk mengatur materi yang akan diajarkan"
        }
    ],
    review: [
        {
            bintang: 5,
            nama: "Nurulita Nala",
            deskripsi: "Kakaknya sangat sabar dan cara kakaknya ngajar ngga bikin aku bosen",
        },
        {
            bintang: 4,
            nama: "Lauda Virdina",
            deskripsi: "Bisa banyak latihan soal matematika buat persiapan UTBK nanti"
        }
    ],
    overall: {
        bintang: 4.75,
        jumlah: 10
    }
}

// Display data
const headerContainer = document.getElementById("teacher-header");
const profileContainer = document.getElementById("profil-diri");
const pengalamanContainer = document.getElementById("pengalaman");

headerContainer.innerHTML = `
<div class="header-info">
<img src="https://drive.google.com/uc?export=view&id=${teacher1.foto}" alt="" class="teacher-img">
<div class="header-text">
    <p class="name">${teacher1.nama}</p>
    <p class="jurusan">${teacher1.edukasi[0].jurusan} | ${teacher1.edukasi[0].lokasi}</p>
    <p class="alamat">${teacher1.alamat["kabupaten kota"]}, ${teacher1.alamat.provinsi}</p>
</div>
</div>
<div class="header-btn">
<button>Belajar dengan ${teacher1.nama.split(' ')[0]}</button>
</div>
`

profileContainer.innerHTML = `
<div class="deskripsi-diri">
    <h2>Deskripsi Diri</h2>
    <p>${teacher1.deskripsi}</p>
</div>
<div class="profil-diri-bawah">
    <div class="edukasi">
        <h2>Edukasi</h2>
        <div class="edukasi-univ">
            <p>${teacher1.edukasi[0].lokasi}</p>
            <p>${teacher1.edukasi[0].jurusan}</p>
        </div>
        <div class="edukasi-menengah">
            <p>${teacher1.edukasi[1].lokasi}</p>
            <p>${teacher1.edukasi[1].jurusan}</p>
        </div>
    </div>
    <div class="bidang-ajar">
        <h2>Bidang Ajar</h2>
        <ul id="bidang-ajar"></ul>
    </div>
</div>
`

const bidangContainer = document.getElementById("bidang-ajar");

teacher1["bidang ajar"].forEach(bidang => {
    const node = document.createElement("li");
    const textnode = document.createTextNode(bidang);
    node.appendChild(textnode);
    bidangContainer.appendChild(node);
    console.log(bidang);
})

const appendPengalaman = () => {
    teacher1.pengalaman.forEach(pengalaman => {
        const node = document.createElement("div");
        node.classList.add("pengalaman-detail")
        node.innerHTML = `
        <p class="posisi">${pengalaman.posisi}</p>
        <div class="pengalaman-status">
            <p class="lokasi">${pengalaman.lokasi} |</p>
            <p class="mulai">${pengalaman.mulai} |</p>
            <p class="selesai">${pengalaman.selesai}</p>
        </div>
        <p class="deskripsi">${pengalaman.deskripsi}</p>
        `
        pengalamanContainer.appendChild(node);
    })
}

appendPengalaman();



// Sub navbar

const teacherContainer = document.getElementById("teacher-details");
const navbar = document.getElementsByClassName("navbar-menu");
const info = document.getElementsByClassName("sub-menu");
const profilDiri = document.getElementById("profil-diri");
const pengalaman = document.getElementById("pengalaman");
const ulasan = document.getElementById("ulasan");

document.getElementById("nav-profil").addEventListener("click", () => {
    resetHidden();
    document.getElementById("nav-profil").classList.remove("hidden");
    document.getElementById("profil-diri").classList.remove("hidden");
})

document.getElementById("nav-pengalaman").addEventListener("click", () => {
    resetHidden();
    document.getElementById("nav-pengalaman").classList.remove("hidden");
    document.getElementById("pengalaman").classList.remove("hidden");
})

document.getElementById("nav-ulasan").addEventListener("click", () => {
    resetHidden();
    document.getElementById("nav-ulasan").classList.remove("hidden");
    document.getElementById("ulasan").classList.remove("hidden");
})

const resetHidden = () => {
    for(let i=0; i<navbar.length; i++) {
        navbar[i].classList.add("hidden")
    }
    for(let i=0; i<info.length; i++) {
        info[i].classList.add("hidden");
    }
}