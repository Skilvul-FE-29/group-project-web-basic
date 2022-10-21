// Data dummy
const teacher1 = {
    nama: "Juliana Cameron",
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
