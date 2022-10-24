// Mengambil dan menampilkan data dari order API
let getDataRequest = async () => {
    let response = await fetch(
        "https://634a01375df95285140a732e.mockapi.io/order"
    );
    let request = await response.json();
    
    let data = request;

    let userID = JSON.parse(localStorage.getItem("user_login")).id;

    data.forEach((item) => {
        let containerData = document.getElementById("daftar-sesi");
        if(item.userID == userID) {
            containerData.innerHTML += `
                <section class="card">
                    <div class="card-content">
                        <h4>${item.materi.topik} : ${item.materi.detail}</h4>
                        <p>Pengajar : ${item.teacherName}</p>
                        <p>Tanggal : ${item.waktu.tanggal}</p>
                        <p>Waktu : ${item.waktu.mulai} - ${item.waktu.selesai} WIB</p>
                    </div>
                    <div class="card-btn">
                        <button id="detail-btn">Lihat Detail Sesi</button>
                    </div>
                </section>
                `;
            
        }
    });
};

getDataRequest();

