import getHash from '../utils/getHash'
import getData from '../utils/getData'


const Character = async () => {
    const id = await getHash();
    const character = await getData(id);
    const {image, name, episode, status, gender, origin, location, species} = character;
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${image}" alt="${name}">
            <h2> ${name} </name>
        </article>
        <article class="Charactes-card">
            <h3>Episodes: <span>${episode.length}</span></h3>
            <h3>Status: <span>${status}</span> </h3>
            <h3>Specie: <span>${species}</span></h3>
            <h3>Gender: <span>${gender}</span></h3>
            <h3>Origin: <span>${origin.name}</span></h3>
            <h3>Last location: <span>${location.name}</span></h3>
        </article>

    </div>
    `

    return view;
}

export default Character;