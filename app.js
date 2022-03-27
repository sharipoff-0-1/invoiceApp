const washBtn = document.getElementById("btn-wash");
const mowBtn = document.getElementById("btn-mow");
const pullBtn = document.getElementById("btn-pull");
const sendBtn = document.getElementById("send-btn");
const removeBtn = document.getElementById("remove-btn");
const financeEl = document.getElementById("finance");
const total = document.getElementById("total");
let noteEl = document.querySelector(".note");
let recieptArr = [];

const washCar = {
  title: "Wash Car",
  value: 10,
};

const mowLown = {
  title: "Mow Lown",
  value: 20,
};

const pullWeeds = {
  title: "Pull Weeds",
  value: 30,
};

function generateRecieptHTML(title, value) {
  let reciept = "";
  let sum = 0;
  for (let i = 0; i < recieptArr.length; i++) {
    reciept += `
      <div class="finance">
      <h4>
        ${recieptArr[i].title}
        <span onclick="remove(${i})" id="remove-btn">Remove</span>
      </h4>
      <p><span>$</span>${recieptArr[i].value}</p>
    </div>
  `;
    sum += recieptArr[i].value;
  }
  financeEl.innerHTML = reciept;
  total.textContent = `$${sum}`;

  if (sum > 0) {
    noteEl.classList.remove("show");
  } else {
    noteEl.textContent = "";
  }
}

washBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (recieptArr.indexOf(washCar) < 0) {
    recieptArr.push(washCar);
  }
  financeEl.innerHTML = "";
  generateRecieptHTML(recieptArr);
});

mowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (recieptArr.indexOf(mowLown) < 0) {
    recieptArr.push(mowLown);
  }
  financeEl.innerHTML = "";
  generateRecieptHTML(recieptArr);
});

pullBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (recieptArr.indexOf(pullWeeds) < 0) {
    recieptArr.push(pullWeeds);
  }
  financeEl.innerHTML = "";
  generateRecieptHTML(recieptArr);
});

sendBtn.addEventListener("click", () => {
  recieptArr = [];
  financeEl.innerHTML = "";
  total.textContent = `$0`;
  noteEl.classList.add("show");
});

function remove(index) {
  recieptArr.splice(index, 1);
  generateRecieptHTML(recieptArr);
}
