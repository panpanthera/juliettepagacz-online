/*
*Anime un titre avec un effet d'apparition mot par mot
*
*@param {string} selector
*/
function animateTitle(selector) {
    const title = document.querySelector(selector)
    if (title == null) {
        console.error('impossible de trouver l\'élément' + selector)
        return
    }



    const spans = spanify(title)
    title.style.opacity = 1
    console.log('spans', spans)

    spans.forEach((span, k) => {
        span.children[0].style.animationDelay = (k * .1) + 's'
    })
}

/**
 * Entoure chaque mot d'un span
 * 
 * @param {Node} element 
 * @returns {HTMLSpanElement[]}
 */

function spanify(element) {
    // on construiut iun tab contenant la nouvelle structure
    const children = Array.from(element.childNodes)
    let spans = []
    let elements = []
    children.forEach(child => {
        if (child.nodeType == Node.TEXT_NODE) {
            const words = child.textContent.split(' ')
            console.log(words)
            let wordSpans = words.map(wrapWord)
            spans = spans.concat(wordSpans)
            elements = elements.concat(
                injectElementBetweenItems(wordSpans, document.createTextNode(' '))
            )
        } else if (child.tagName == 'BR') {
            elements.push(child)
        } else {
            spans = spans.concat(spanify(child))
            elements.push(child)
        }
    })
    console.log(elements)

    // puis on utilise ce tableau et on injecte les élémens dans le title
    element.innerHTML = ''
    elements.forEach(el => {
        element.appendChild(el)
    })
    return spans
}

/**
 * 
 * Entoure le mot de deux spans
 * 
 * 
 * @param {string} word
 * 
 */

function wrapWord(word) {
    const span = document.createElement('span')
    const span2 = document.createElement('span')
    span.appendChild(span2)
    span2.innerHTML = word
    return span
}

/**
 * @param {Node[]} arr
 * @param {Node} element Element à injecter entre chaque élement du tableau
 * @return {Node[]}
 */

function injectElementBetweenItems(arr, element) {
    return arr.map((item, k) => {
        if (k == arr.length - 1) {
            return [item]
        }
        return [item, element.cloneNode()]
    }).reduce((acc, pair) => {
        acc = acc.concat(pair)
        return acc
    }, [])

}

animateTitle('.title')

var sliderMain = document.getElementById("slider-main");
var item = sliderMain.getElementsByClassName("item");
function next() {
    sliderMain.append(item[0]);
}

function prev() {
    sliderMain.prepend(item[item.length - 1]);
}