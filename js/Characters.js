
const API_URI = "https://rickandmortyapi.com/api";

const showCharacters = data => {
    const $cards = document.querySelector('.cards');
    const $template = document.querySelector('template').content;
    const $fragment = document.createDocumentFragment();

    const characters = data.results;
    
    characters.forEach(item => {
        $template.querySelector('img').setAttribute("src", item.image);
        $template.querySelector('.name').textContent = item.name;
        $template.querySelector('.status').textContent = `Status: ${item.status}`;
        $template.querySelector('.gender').textContent = `Gender: ${item.gender}`;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });

    $cards.innerHTML = "";
    $cards.appendChild($fragment);

    
}



export const getAllCharacters = () => {
    fetch(`${API_URI}/character`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
};

export const getCharacter = async name => {
    // fetch(`${API_URI}/character/?name=${name}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));

    try {
        const res = await fetch(`${API_URI}/character/?name=${name}`);
        const data = await res.json();

        showCharacters(data);

    } catch (error) {
        const $cards = document.querySelector('.cards');

        $cards.innerHTML = error;

    }
    

}

// getAllCharacters();
// getCharacter(1);




