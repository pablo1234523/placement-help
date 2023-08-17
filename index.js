function NewTab(url) {
    window.open(url, "_blank");
}

imageElement = document.querySelector(".js-images")

let image_string_html = ""

for (let i = 0; i < 50 ; i++) {
    image_url = `https://pablo1234523.github.io/placement-help/screenshots/s${i}.jpeg`
    console.log(image_url)
    image_string_html += `<img src='screenshots/s${i}.jpeg' class='css-images' onclick=NewTab('${image_url}')>`
    
}

imageElement.innerHTML = image_string_html