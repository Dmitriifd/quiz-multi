


    
function elementFromHtml(html) {
    const template = document.createElement('template');

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}


const myList = elementFromHtml(`
    <ul>
        <li>Контент</li>
    </ul>
`)


console.dir(myList);

document.body.appendChild(myList)