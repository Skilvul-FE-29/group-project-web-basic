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

const loadTeacher = async () => {
    try {
      const res = await fetch(
        "https://634a01375df95285140a732e.mockapi.io/teachers"
      );
      data = await res.json();
      displayDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

const displayDetail = (data) => {
    const target = localStorage.getItem("id_pengajar");

    for(let i=0; i<data.length; i++) {
        if(data[i].id == target) {
            displayTeacher(data[i])

        }
    }
}

const displayTeacher = (data) => {
    const headerContainer = document.getElementById("teacher-header");
    const profileContainer = document.getElementById("profil-diri");
    const pengalamanContainer = document.getElementById("pengalaman");
    const reviewContainer = document.getElementById("rating-container");

    headerContainer.innerHTML = `
    <div class="header-info">
    <img src="https://drive.google.com/uc?export=view&id=${data.foto}" alt="" class="teacher-img">
    <div class="header-text">
        <p class="name">${data.nama}</p>
        <p class="jurusan">${data.edukasi[0].jurusan} | ${data.edukasi[0].lokasi}</p>
        <p class="alamat">${data.alamat["kabupaten kota"]}, ${data.alamat.provinsi}</p>
    </div>
    </div>
    <div class="header-btn">
    <button>Belajar dengan ${data.nama.split(' ')[0]}</button>
    </div>
    `
    profileContainer.innerHTML = `
    <div class="deskripsi-diri">
        <h2>Deskripsi Diri</h2>
        <p>${data.deskripsi}</p>
    </div>
    <div class="profil-diri-bawah">
        <div class="edukasi">
            <h2>Edukasi</h2>
            <div class="edukasi-univ">
                <p>${data.edukasi[0].lokasi}</p>
                <p>${data.edukasi[0].jurusan}</p>
            </div>
            <div class="edukasi-menengah">
                <p>${data.edukasi[1].lokasi}</p>
                <p>${data.edukasi[1].jurusan}</p>
            </div>
        </div>
        <div class="bidang-ajar">
            <h2>Bidang Ajar</h2>
            <ul id="bidang-ajar"></ul>
        </div>
    </div>
    `

    const bidangContainer = document.getElementById("bidang-ajar");

    data["bidang ajar"].forEach(bidang => {
        const node = document.createElement("li");
        const textnode = document.createTextNode(bidang);
        node.appendChild(textnode);
        bidangContainer.appendChild(node);
    })

    const appendPengalaman = () => {
        data.pengalaman.forEach(pengalaman => {
            const node = document.createElement("div");
            node.classList.add("pengalaman-detail");
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

    const appendUlasan = () => {
        data.review.forEach(review => {
            const node = document.createElement("div");
            node.classList.add("detail-rating");
            const nodeBintang = document.createElement("div");
            nodeBintang.classList.add("bintang");
            for(let i=0; i<review.bintang; i++) {
                nodeBintang.innerHTML += `<img src="../src/star.svg" alt="bintang">`
            }
            node.appendChild(nodeBintang);
            
            const nodeNama = document.createElement("p");
            nodeNama.classList.add("nama");
            nodeNama.innerText = `${teacher1.nama}`;
    
            node.appendChild(nodeNama);
    
            const nodeDeskripsi = document.createElement("p");
            nodeDeskripsi.classList.add("deskripsi");
            nodeDeskripsi.innerText = `${review.deskripsi}`;
    
            node.appendChild(nodeDeskripsi);
    
            reviewContainer.appendChild(node);
        })
    
        const nodeOverall = document.createElement("div");
        nodeOverall.classList.add("overall-rating");
        nodeOverall.innerHTML = `
        <h2>Overall Rating</h2>
        <div class="rating">
            <img src="../src/star.svg" alt="bintang">
            <h2>4,70</h2>
        </div>
        <p class="jumlah-ulasan">10 ulasan</p>
        `
        document.getElementById("ulasan").appendChild(nodeOverall)
    }
    
    appendUlasan();

}

loadTeacher(); 

// Fungsionalitas tombol kembali ke page teacher list
const back = () => {
    window.location.href = './teacher.html';
}

// Fungsionalitas sub navbar

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

// function postTeacher(url, input) {
//     fetch(url, {
//         method: "POST",
//         body: JSON.stringify(input),
//         headers: {"Content-type": "application/json; charset=UTF-8"}
//     }).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
// } 

// postTeacher("https://634a01375df95285140a732e.mockapi.io/teachers", teacher1)