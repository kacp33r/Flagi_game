// Lista plików flag i odpowiadaj¹cych im nazw krajów w jêzyku polskim
const flagsData = [
    { file: "ad.png", country: "Andora" },
    { file: "ae.png", country: "Zjednoczone Emiraty Arabskie" },
    { file: "af.png", country: "Afganistan" },
    { file: "ag.png", country: "Antigua i Barbuda" },
    { file: "ai.png", country: "Anguila" },
    { file: "al.png", country: "Albania" },
    { file: "am.png", country: "Armenia" },
    { file: "ao.png", country: "Angola" },
    { file: "aq.png", country: "Antarktyda" },
    { file: "ar.png", country: "Argentyna" },
    { file: "as.png", country: "Samoa Amerykañska" },
    { file: "at.png", country: "Austria" },
    { file: "au.png", country: "Australia" },
    { file: "aw.png", country: "Aruba" },
    { file: "ax.png", country: "Wyspy Alandzkie" },
    { file: "az.png", country: "Azerbejd¿an" },
    { file: "ba.png", country: "Boœnia i Hercegowina" },
    { file: "bb.png", country: "Barbados" },
    { file: "bd.png", country: "Bangladesz" },
    { file: "be.png", country: "Belgia" },
    { file: "bf.png", country: "Burkina Faso" },
    { file: "bg.png", country: "Bu³garia" },
    { file: "bh.png", country: "Bahrajn" },
    { file: "bi.png", country: "Burundi" },
    { file: "bj.png", country: "Benin" },
    { file: "bl.png", country: "Saint Barthélemy" },
    { file: "bm.png", country: "Bermudy" },
    { file: "bn.png", country: "Brunei" },
    { file: "bo.png", country: "Boliwia" },
    { file: "bq.png", country: "Bonaire, Sint Eustatius i Saba" },
    { file: "br.png", country: "Brazylia" },
    { file: "bs.png", country: "Bahamy" },
    { file: "bt.png", country: "Bhutan" },
    { file: "bv.png", country: "Wyspa Bouveta" },
    { file: "bw.png", country: "Botswana" },
    { file: "by.png", country: "Bia³oruœ" },
    { file: "bz.png", country: "Belize" },
    // Dodaj kolejne dane w tym samym formacie...
    { file: "pl.png", country: "Polska" },  // Przyk³adowa flaga
    { file: "de.png", country: "Niemcy" },  // Przyk³adowa flaga
    { file: "us.png", country: "Stany Zjednoczone" }  // Przyk³adowa flaga
];

// Funkcja do losowego wyboru flagi
function getRandomFlag() {
    const randomIndex = Math.floor(Math.random() * flagsData.length);
    const randomFlag = flagsData[randomIndex];

    // Ustawiamy flagê na stronie
    document.getElementById('flag').src = 'flags/' + randomFlag.file;

    // Generujemy 4 odpowiedzi (jedna poprawna, 3 fa³szywe)
    let options = [randomFlag.country];
    while (options.length < 4) {
        const randomOption = flagsData[Math.floor(Math.random() * flagsData.length)].country;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Losowo mieszamy odpowiedzi
    options = options.sort(() => Math.random() - 0.5);

    // Ustawiamy odpowiedzi na przyciskach
    for (let i = 0; i < 4; i++) {
        document.getElementById('option' + (i + 1)).textContent = options[i];
    }

    // Zapisujemy poprawn¹ odpowiedŸ
    document.getElementById('flag').dataset.correctAnswer = randomFlag.country;
}

// Funkcja do sprawdzania odpowiedzi
function checkAnswer(option) {
    const selectedAnswer = document.getElementById('option' + option).textContent;
    const correctAnswer = document.getElementById('flag').dataset.correctAnswer;
    const resultElement = document.getElementById('result');

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Brawo! OdpowiedŸ poprawna.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Niestety, spróbuj ponownie.";
        resultElement.style.color = "red";
    }

    // Losujemy now¹ flagê po 2 sekundach
    setTimeout(getRandomFlag, 2000);
}

// £adujemy pierwsz¹ flagê po za³adowaniu strony
window.onload = getRandomFlag;
