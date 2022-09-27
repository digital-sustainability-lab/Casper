const elements = document.querySelectorAll(".nav a");

const groups = [];
//finds all mainpages and gives a number
elements.forEach((el) => {
  const label = el.textContent;
  const split = label.split(/[()]/);

  if (split.length <= 1 || split[1].indexOf("main") != -1) {
    let mainpage = {
      name: split[0].trim(),
      path: el.attributes.href.nodeValue,
      number: undefined,
      el: el,
      subPages: [],
    };
    if (split[1]) {
      mainpage.number = split[1].replace(/\D/g, "");
    }
    groups.push(mainpage);
  }
});

//finds all subpages and gives a number
elements.forEach((el) => {
  const label = el.textContent;

  const split = label.split(/[()]/);

  if (split.length > 1 && split[1].indexOf("sub") != -1) {
    let subPage = {
      name: split[0].trim(),
      path: el.attributes.href.nodeValue,
      number: split[1].replace(/\D/g, ""),
      el: el,
    };

    let mainpage = groups.find((g) => {
      return g.number == subPage.number;
    });
    mainpage.subPages.push(subPage);
  }
});

//create dropdown with main and subpages
let nav = document.getElementById("nav");
createNav(groups, nav);

document.getElementById("oldNav").remove();

function createNav(groups, parentEl) {
  let ul = document.createElement("ul");
  parentEl.appendChild(ul);
  for (let mainpage of groups) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.appendChild(document.createTextNode(mainpage.name.toUpperCase()));

    li.appendChild(a);
    ul.appendChild(li);
    if (mainpage.subPages && mainpage.subPages.length > 0) {
      createNav(mainpage.subPages, li);
    } else {
      a.setAttribute("href", mainpage.path);
    }
  }
}
