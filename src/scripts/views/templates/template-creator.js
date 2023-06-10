import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
    <img class="resto-item__header__poster" crossorigin="anonymous" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}" alt="Gambar ${resto.name}" tabindex="0"/>
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
    <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>City: ${resto.city}</p>
      <p>Deskription: ${resto.description}</p>
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.name}</h2>
  <img class="resto__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City: ${resto.city}</h4>
    <h4>Address: ${resto.address}</h4>
    <h4>Rating: ${resto.rating}</h4>
    <h4>Description: ${resto.description}</h4>
  </div>
  <div class="resto__overview">
    <h4 tabindex="0" id="resto-detail-form-review-title"><span>List Menu</span></h4>
    <div class="restaurant-detail__menu-list">
      <div class="foods">
      <h4>Food</h4>
      </hr>
        <ul class="restaurant-detail__foods">
          ${resto.menus.foods
    .map(
      (food) => `
          <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
      <div class="drinks">
      <h4>Drink</h4>
      </hr>
        <ul class="restaurant-detail__drinks">
          ${resto.menus.drinks
    .map(
      (drink) => `
          <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`,
    )
    .join('')}
        </ul>
      </div>
    </div>
  <h4 tabindex="0" id="resto-detail-form-review-title"><span>Reviews</span></htabindex=>
    <div tabindex="0" class="detail-review">
      ${resto.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
        <div class="body-review">
          ${review.review}
        </div>
      </div>
      `,
    )
    .join('')}
    </div>

  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate, createRestoItemTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
