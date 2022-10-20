const accBtn = document.querySelectorAll("#acc-btn");
const accList = document.querySelectorAll(".list-accordion");
// const btnPay = document.querySelectorAll("#btn-pay");
const statusBayar = document.querySelectorAll(".status");

statusBayar.forEach((status) => {
  if (status.textContent === "Belum Di Bayar") {
    status.classList.add("pending");
  } else if (status.textContent === "Terbayar") {
    status.classList.add("success");
  } else {
    status.classList.add("danger");
  }
});

// btnPay.forEach((btn) => {
//   if (statusBayar.textContent === "Belum Di Bayar") {
//     btn.classList.add("active-btn");
//   }
// });

accBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    accList.forEach((list) => {
      list.classList.toggle("active");
    });
  });
});
