let flipCard = $(".flip-card");
for (const card of flipCard) {
  $(card).on("click", (e) => {
    $(card).toggleClass("is-flipped");
  });
}

let speakers = $(".testVoice");
for (const speaker of speakers) {
  $(speaker).on("click", (e) => {
    e.stopPropagation();
    const mss = ($(speaker)).attr('mss')
    const utterance = new SpeechSynthesisUtterance(mss);
    utterance.lang='en-US'
    speechSynthesis.speak(utterance);
    e.preventDefault();
  });
}


