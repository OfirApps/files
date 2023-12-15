console.warn('כל התוכן מוגן בזכויות יוצרים')

function scrolltobodyMainPage() {
    document.querySelector("div#safearea").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const elements = document.querySelectorAll("#full > div.cover-body > div.bottom > div > div > a > img");

elements.forEach((element, index) => {
 const alt = `מטוס`;
 if (index === 1) {
   alt = "טלפון סלולרי";
 } else if (index === 2) {
   alt = "חץ המופנה כלפי מטה";
 } else if (index === 3) {
   alt = "עיתון";
 } else if (index === 4) {
   alt = "כוכב";
 }
 
 element.alt = alt;
});
