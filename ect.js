console.warn('כל התוכן מוגן בזכויות יוצרים')

var styles = `
    * {
        direction:rtl;
    }
    #l_main {
        padding-left: 16px;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

function scrolltobodyMainPage() {
    document.querySelector("div#safearea").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}