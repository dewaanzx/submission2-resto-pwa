import TheRestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <div class="content">
    <div id="restos" class="restos">
    </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheRestoDbSource.nowPlayingResto();
    const restoContainer = document.querySelector('#restos');
    restaurant.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Restaurant;
