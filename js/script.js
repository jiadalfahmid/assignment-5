let balance = parseFloat(document.getElementById("balance").innerText);
const donationBtn = document.getElementById("donation");
const historyBtn = document.getElementById("historyBtn");
const historyPage = document.getElementById("history");
let donated1 = parseFloat(document.getElementById("donated1").innerText);
const donateNoakhali = document.getElementById("donateNoakhali");
const inputNoakhali = document.getElementById("inputNoakhali");
const modal = document.getElementById("my_modal_6");


// function that checks if donation amount is less then balance!
function debited(donationAmount) {
  if (donationAmount < balance) {
    balance -= donationAmount;
    document.getElementById("balance").innerText = balance;
    return true;
  } else {
    alert("You have insufficient balance!");
    return false;
  }
}

donateNoakhali.addEventListener("click", function () {
  const inputNoakhaliAmount = parseFloat(inputNoakhali.value);
  if (!isNaN(inputNoakhaliAmount) && inputNoakhaliAmount > 0) {
    if (debited(inputNoakhaliAmount)) {
      donated1 += inputNoakhaliAmount;
      document.getElementById("donated1").innerText = donated1;
      modal.classList.remove("hidden");
      modal.classList.add("modal-toggle");
    }
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("modal-toggle");
    return alert("Please input valid amount");
  }
});

// donation
donationBtn.addEventListener("click", function () {
  donationBtn.classList.remove(
    "border",
    "border-gray-300",
    "bg-transparent",
    "text-gray-500"
  );
  donationBtn.classList.add("bg-primary", "hover:bg-lime-300");
  historyBtn.classList.add(
    "border",
    "border-gray-300",
    "bg-transparent",
    "text-gray-500"
  );
  historyBtn.classList.remove("bg-primary", "hover:bg-lime-300");
});

// history
historyBtn.addEventListener("click", function () {
  historyBtn.classList.remove(
    "border",
    "border-gray-300",
    "bg-transparent",
    "text-gray-500"
  );
  historyBtn.classList.add("bg-primary", "hover:bg-lime-300");
  donationBtn.classList.add(
    "border",
    "border-gray-300",
    "bg-transparent",
    "text-gray-500"
  );
  donationBtn.classList.remove("bg-primary", "hover:bg-lime-300");
});
