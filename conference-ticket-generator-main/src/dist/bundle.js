var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ts/models/loadSvg.ts
var loadSvg_exports = {};
__export(loadSvg_exports, {
  default: () => loadSvg
});
function loadSvg(element, url) {
  fetch(url).then((response) => response.text).then((data) => {
    if (typeof data === "string") {
      element.innerHTML = data;
    }
  }).catch((error) => console.error("Erro ao carregar SVG:", error));
}

// ts/models/findBrother.ts
var findBrother_exports = {};
__export(findBrother_exports, {
  default: () => findBrother
});
function findBrother(element, selector) {
  const parentElement = element.parentElement;
  if (parentElement instanceof Element) {
    return parentElement.querySelector(selector);
  } else {
    return parentElement;
  }
}
export {
  findBrother_exports as findBrother,
  loadSvg_exports as loadSvg
};
