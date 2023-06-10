import FavoriteSvargaIdb from '../../data/favorite-svarga-idb';
import { createSvargaItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Your Liked Restaurant</h2>
            <div id="svargas" class="svargas">
            </div>
          </div>
        `;
  },

  async afterRender() {
    const svargas = await FavoriteSvargaIdb.getAllSvarga();
    const svargasContainer = document.querySelector('#svargas');

    svargas.forEach((svarga) => {
      svargasContainer.innerHTML += createSvargaItemTemplate(svarga);
    });
  },
};

export default Like;
