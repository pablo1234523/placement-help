imageElement = document.querySelector(".js-images")
let image_string_html = ""
for (let i = 0; i < 50 ; i++) {
    image_string_html += `<img src='screenshots/s${i}.jpeg'>`
}
console.log(image_string_html)
imageElement.innerHTML = image_string_html