const element = document.querySelectorAll(".nav a");

const groups = [];
element.forEach((el) => {
  if (!el.attributes.href) return;
  const href = el.attributes.href.nodeValue;
  const split = href.split(/[/,-]/);
  if (split.length <= 5) {
    groups.push({
      name: split[3],
      path: el.attributes.href.nodeValue,
      el: el,
      subPages: [],
    });
  }
});

element.forEach((el) => {
  if (!el.attributes.href) return;
  const href = el.attributes.href.nodeValue;
  const split = href.split(/[/,-]/);
  if (split.length >= 6) {
    let semester;
    let index;
    split.forEach((str, i) => {
      if (/[f,h]s\d{2}/.test(str)) {
        semester = str;
        index = i;
      }
    });

    let mainpage = groups.find((g) => {
      return g.name == semester;
    });
    let name;
    if (index == 3) {
      name = split[index + 1];
    } else {
      name = "Showroom";
    }
    let subPage = {
      name: name,
      path: el.attributes.href.nodeValue,
      el: el,
    };
    mainpage.subPages.push(subPage);
  }
});

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
