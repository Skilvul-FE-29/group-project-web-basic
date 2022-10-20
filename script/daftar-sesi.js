
function data() {
    const data = ['Matematika Dasar', 'Fisika', 'Kimia', 'Ekonomi', 'Sosiologi' ]
    let containerData = document.getElementById("daftar-sesi");

    for (let i = 0; i < data.length; i++) {
            containerData.innerHTML += `
            <section class="card">
                <div class="card-content">
                    <h4>${data[i]} : Pertemuan 1</h4>
                    <p>Pengajar : Putri Dresty F</p>
                    <p>Hari/Tanggal : Senin, 17 Oktober 2022</p>
                    <p>Waktu : 14.00 - 15.00 WIB</p>
                </div>
                <div class="card-btn">
                    <button id="detail-btn">Lihat Detail Sesi</button>
                </div>
            </section>`

                
    }
}
data()

