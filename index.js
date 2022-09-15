const form = document.getElementById("formStyle");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const contactUs = new FormData(form);

  console.log(contactUs);

  fetch(
    "https://database.deta.sh/v1/a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
    {
      method: "POST",
      body: contactUs,
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
