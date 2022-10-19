// Search fiture
const teacherContainer = document.querySelector(".list__container-card");
const searchBar = document.getElementById("name__input");

let data = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredTeachers = data.filter((teacher) => {
    return (
      teacher.name.toLowerCase().includes(searchString) ||
      teacher.university.toLowerCase().includes(searchString) ||
      teacher.jurusan.toLowerCase().includes(searchString)
    );
  });
  displayTeacher(filteredTeachers);
});

const loadTeacher = async () => {
  try {
    const res = await fetch(
      "https://634ce2e2f5d2cc648e96b729.mockapi.io/teacher"
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
            <img src="../src/profile-teaacher.png" alt="" />
          </div>
          <div class="card-info">
            <h3 class="card-info__name">${teacher.name}</h3>
            <p class="card-info__location">${teacher.university}</p>
            <p class="card-info__jurusan">${teacher.jurusan}</p>
          </div>
          <div class="card-rating">
            <div class="card__rating-rating">★ <span>${teacher.rating}</span></div>
            <div class="card__rating-review">10 Ulasan</div>
          </div>
        </div>
        `;
    })
    .join("");
  teacherContainer.innerHTML = htmlString;
};

loadTeacher();
