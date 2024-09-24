let balance = parseFloat(document.getElementById("balance").innerText);
const donationBtn = document.getElementById("donation");
const historyBtn = document.getElementById("historyBtn");
const historyPage = document.getElementById("history");
const cards = document.getElementById("cards");
let donated1 = parseFloat(document.getElementById("donated1").innerText);
let donated2 = parseFloat(document.getElementById("donated2").innerText);
let donated3 = parseFloat(document.getElementById("donated3").innerText);
const donateNoakhali = document.getElementById("donateNoakhali");
const inputNoakhali = document.getElementById("inputNoakhali");
const donateFeni = document.getElementById("donateFeni");
const inputQuota = document.getElementById("inputQuota");
const donateQuota = document.getElementById("donateQuota");
const inputFeni = document.getElementById("inputFeni");
const modal = document.getElementById("my_modal_6");

function checkAmount(value) {
  for (let num of value) {
    if (isNaN(num)) {
      return false;
    }
  }
  return true;
}

function debited(donationAmount) {
  if (donationAmount <= balance) {
    balance -= donationAmount;
    document.getElementById("balance").innerText = balance;
    return true;
  } else {
    alert("You have insufficient balance!");
    return false;
  }
}

function showModal() {
  modal.classList.remove("hidden");
  modal.classList.add("modal-toggle");
}

function hideModal() {
  modal.classList.remove("modal-toggle");
  modal.classList.add("hidden");
}

function historyUpdate(amount, cardTitle) {
  let thisMoment = "Date: " + new Date().toString();
  historyPage.innerHTML += `<div class="card border border-gray-300"><div class="card-body"><h2 class="card-title">${amount} Taka is Donated for ${cardTitle}</h2><p>${thisMoment}</p></div></div>`;
}

function donate(input, donated, title) {
  hideModal();
  const inputAmount = parseFloat(input.value);
  if (checkAmount(input.value) && inputAmount > 0) {
    if (debited(inputAmount)) {
      showModal();
      donated.innerText = parseFloat(donated.innerText) + inputAmount;
      input.value = "";
      historyUpdate(inputAmount, title);
    }
  } else {
    alert("Invalid Donation amount");
    return location.reload();
  }
};

donateNoakhali.addEventListener("click", () =>
  donate(inputNoakhali, document.getElementById('donated1'), document.getElementById("titleNoakhali").innerText)
);

donateFeni.addEventListener("click", () =>
  donate(inputFeni, document.getElementById('donated2'), document.getElementById("titleFeni").innerText)
);

donateQuota.addEventListener("click", () =>
  donate(inputQuota, document.getElementById('donated3'), document.getElementById("titleQuota").innerText)
);

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
  historyPage.classList.add("hidden");
  cards.classList.remove("hidden");
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
  historyPage.classList.remove("hidden");
  cards.classList.add("hidden");
});
