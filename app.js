let articleUn = document.getElementById('articleUn');
let articleDeux = document.getElementById('articleDeux');
let articleTrois = document.getElementById('articleTrois');
let articleQuatre = document.getElementById('articleQuatre');
let articleCinq = document.getElementById('articleCinq');
let section = document.getElementById('section');

let linkA = document.getElementById('linkA');
let linkB = document.getElementById('linkB');
let linkC = document.getElementById('linkC');
let linkD = document.getElementById('linkD');
let linkE = document.getElementById('linkE');

linkA.addEventListener("click", () => {
    if(getComputedStyle(articleUn).display != "none") {
        articleUn.style.display = "none";
    } else {
        articleUn.style.display = "block";
    }
})
linkB.addEventListener("click", () => {
    if(getComputedStyle(articleDeux).display != "none") {
        articleDeux.style.display = "none";
    } else {
        articleDeux.style.display = "block";
    }
})
linkC.addEventListener("click", () => {
    if(getComputedStyle(articleTrois).display != "none") {
        articleTrois.style.display = "none";
    } else {
        articleTrois.style.display = "block";
    }
})
linkD.addEventListener("click", () => {
    if(getComputedStyle(articleQuatre).display != "none") {
        articleQuatre.style.display = "none";
    } else {
        articleQuatre.style.display = "block";
    }
})
linkE.addEventListener("click", () => {
    if(getComputedStyle(articleCinq).display != "none") {
        articleCinq.style.display = "none";
    } else {
        articleCinq.style.display = "block";
    }
})