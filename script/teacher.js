// Search fiture
const teacherContainer = document.querySelector(".list__container-card");
const searchBar = document.getElementById("name__input");

let data = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredTeachers = data.filter((teacher) => {
    return (
      teacher.nama.toLowerCase().includes(searchString) ||
      teacher.edukasi[0].lokasi.toLowerCase().includes(searchString) ||
      teacher.edukasi[0].jurusan.toLowerCase().includes(searchString)
    );
  });
  displayTeacher(filteredTeachers);
});

const loadTeacher = async () => {
  try {
    const res = await fetch(
      "https://634a01375df95285140a732e.mockapi.io/teachers"
    );
    data = await res.json();
    displayTeacher(data);
  } catch (error) {
    console.log(error);
  }
};

const displayTeacher = (data) => {
  const htmlString = data
    .map((teacher) => {
      return `
        <div class="card-wrapper">
          <div class="card-profile">
            <img src="https://drive.google.com/uc?export=view&id=${teacher.foto}" alt="" />
          </div>
          <div class="card-info">
            <h3 class="card-info__name">${teacher.nama}</h3>
            <p class="card-info__location">${teacher.edukasi[0].lokasi}</p>
            <p class="card-info__jurusan">${teacher.edukasi[0].jurusan}</p>
          </div>
          <div class="card-rating">
            <div class="card__rating-rating">★ <span>${teacher.overall.bintang}</span></div>
            <div class="card__rating-review">10 Ulasan</div>
          </div>
        </div>
        `;
    })
    .join("");
  teacherContainer.innerHTML = htmlString;
};

loadTeacher();
