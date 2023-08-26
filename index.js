function ocrImage(url, i) {
    Tesseract.recognize(
    url,
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    document.getElementById(`ocr-output-${i}`).innerText = text;
  })
}

function NewTab(url) {
    window.open(url, "_blank");
}

imageElement = document.querySelector(".js-images")

let total_html = ""

for (let i = 0; i < 50 ; i++) {
    let image_url = `https://pablo1234523.github.io/placement-help/screenshots/s${i}.jpeg`
    console.log(image_url)
    // let q_no_html = `<p class='css-qno'>${i+1}.</p>`
    let image_string_html = `<img src='screenshots/s${i}.jpeg' class='css-images' onclick=NewTab('${image_url}')>`;
    let ocr_button_html = `<button class='ocr-button' onclick=ocrImage('${image_url}',${i})>OCR</button>`;
    let ocr_output_html = `<div class='ocr-output-class' id='ocr-output-${i}'></div>`;
    
    // total_html += q_no_html + image_string_html + ocr_button_html + ocr_output_html + '<hr>'
    total_html += image_string_html + ocr_button_html + ocr_output_html + '<hr>'
}

imageElement.innerHTML = `<div>${total_html}</div>`