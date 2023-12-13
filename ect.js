console.warn('כל התוכן מוגן בזכויות יוצרים')

var styles = `
    html {
        direction:rtl;
    }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)