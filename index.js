function NewTab(url) {
    window.open(url, "_blank");
}

imageElement = document.querySelector(".js-images")

let image_string_html = ""

for (let i = 0; i < 50 ; i++) {
    image_url = `https://pablo1234523.github.io/placement-help/screenshots/s${i}.jpeg`
    console.log(image_url)
    q_no_html = `<p class='css-qno'>${i+1}.</p>`
    image_string_html += q_no_html + `<img src='screenshots/s${i}.jpeg' class='css-images' onclick=NewTab('${image_url}')> <hr>`
    
}

imageElement.innerHTML = `<div>${image_string_html}</div>`