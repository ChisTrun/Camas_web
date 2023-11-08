let flipCard = $('.flip-card');
for (const card of flipCard) {
  $(card).on('click',(e) => {
    $(card).toggleClass('is-flipped');
  })
}


