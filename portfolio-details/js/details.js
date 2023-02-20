/**
* Change language
*/
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (languaje) => {
if(!languaje) languaje = 'en';
const requestJson = await fetch(`./languages/${languaje}.json`);
const texts = await requestJson.json();

for(const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    textToChange.innerHTML = texts[section][value];
}
};

changeLanguage('en');
