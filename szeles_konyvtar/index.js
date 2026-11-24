const byID = (id) => document.getElementById(id)

const image = byID("image");
const footer = byID("footer");
const main = byID("main")

main.style.marginBottom = getComputedStyle(footer).height;