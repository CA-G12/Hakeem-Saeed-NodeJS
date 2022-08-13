const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const IMAGE_URL = "https://robohash.org/3?set=set2&size=180x180";

const searchcontainer = document.querySelector(".search-result");
const serchInput = document.getElementById("search");
const informationCard = document.querySelector(".result-container");
informationCard.textContent = "her the information will be";

const delayKeyUp = (() => {
  let timer = null;
  const delay = (func, ms) => {
    timer ? clearTimeout(timer) : null;
    timer = setTimeout(func, ms);
  };
  return delay;
})();

function rendersearchResult(objs) {
  searchcontainer.textContent = "";
  for (let pro in objs) {
    let ancor = document.createElement("a");
    ancor.id = objs[pro].id;
    ancor.textContent = objs[pro].name;
    searchcontainer.appendChild(ancor);
    ancor.addEventListener("click", () => {
      searchcontainer.textContent = "";
      const user = searchUser(objs, objs[pro].id);
      informationCard.textContent = "";
      renderMonster(user);
    });
  }
}

const renderMonster = (obj) => {
  console.log(obj.id);
  const imgURL = `https://robohash.org/${obj.id}?set=set2&size=180x180`;
  const image = document.createElement("img");
  image.setAttribute("src", imgURL);
  informationCard.appendChild(image);

  const monsterInfo = document.createElement("div");
  monsterInfo.classList.add("result-info");
  informationCard.appendChild(monsterInfo);

  const nameLabelContent = document.createElement("p");
  nameLabelContent.textContent = "Name : ";
  const nameContent = document.createElement("span");
  nameContent.textContent = obj.name;
  monsterInfo.classList.add("result-info");
  nameLabelContent.appendChild(nameContent);
  monsterInfo.appendChild(nameLabelContent);

  const emailLabelContent = document.createElement("p");
  emailLabelContent.textContent = "Email : ";
  const emailContent = document.createElement("span");
  emailContent.textContent = obj.email;
  monsterInfo.classList.add("result-info");
  emailLabelContent.appendChild(emailContent);
  monsterInfo.appendChild(emailLabelContent);

  const cityLabelContent = document.createElement("p");
  cityLabelContent.textContent = "city : ";
  const cityContent = document.createElement("span");
  cityContent.textContent = obj.address.city;
  monsterInfo.classList.add("result-info");
  cityLabelContent.appendChild(cityContent);
  monsterInfo.appendChild(cityLabelContent);

  const companyLabelContent = document.createElement("p");
  companyLabelContent.textContent = "Company : ";
  const companyContent = document.createElement("span");
  companyContent.textContent = obj.company.name;
  monsterInfo.classList.add("result-info");
  companyLabelContent.appendChild(companyContent);
  monsterInfo.appendChild(companyLabelContent);

  const phoneLabelContent = document.createElement("p");
  phoneLabelContent.textContent = "Phone : ";
  const phoneContent = document.createElement("span");
  phoneContent.textContent = obj.phone;
  monsterInfo.classList.add("result-info");
  phoneLabelContent.appendChild(phoneContent);
  monsterInfo.appendChild(phoneLabelContent);
};

fetch("/users", (data) => {
  // const monsters = JSON.parse(data);

  console.log(data);
  serchInput.addEventListener("keyup", (e) => {
    const query = e.target.value;
    delayKeyUp(() => {
      if (query === "") {
        searchcontainer.textContent = "";
      } else {
        const searchResultArr = searchCharacter(data, query);
        rendersearchResult(searchResultArr);
      }
    }, 400);
  });
});
