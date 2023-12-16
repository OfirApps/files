console.warn('כל התוכן מוגן בזכויות יוצרים')

function scrolltobodyMainPage() {
    document.querySelector("div#safearea").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

// const elements = document.querySelectorAll("#full > div.cover-body > div.bottom > div > div > a > img");

// elements.forEach((e, index) => {
// a = `מטוס`;
//  if (index === 1) {
//    a = "טלפון סלולרי";
//  } else if (index === 2) {
//    a = "חץ המופנה כלפי מטה";
//  } else if (index === 3) {
//    a = "עיתון";
//  } else if (index === 4) {
//    a = "כוכב";
//  }
//  e.a = a;
// });


// for (let i = 1; i <= document.querySelectorAll("a.avatar > img").length; i++) {
//     e = document.querySelectorAll(`a.avatar > img`)[i];
//     e.alt = "תמונת פרופיל";
//     e.parentNode.ariaLabel = "מידע על הכותב";
// }
