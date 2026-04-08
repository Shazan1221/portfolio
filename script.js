const data = [
  {
    title: "The Last Signal",
    desc: "A story about humanity's final message."
  },
  {
    title: "Broken Silence",
    desc: "A psychological drama about truth and lies."
  }
];

const container = document.getElementById("scripts");

data.forEach(item => {
  container.innerHTML += `
    <div class="col-md-6 mb-4">
      <div class="card-custom">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
});
