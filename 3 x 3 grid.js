const eredetiSzamok = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function szamokKiirasa(szamok) {
    const grid = document.getElementById("szamGrid");
    grid.innerHTML = '';
    szamok.forEach(szam => {
        const div = document.createElement("div");
        div.textContent = szam;
        grid.appendChild(div);
    });
}

function szamKeveres() {
    const kevertSzamok = [...eredetiSzamok];
    for (let i = kevertSzamok.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kevertSzamok[i], kevertSzamok[j]] = [kevertSzamok[j], kevertSzamok[i]];
    }
    szamokKiirasa(kevertSzamok);
}