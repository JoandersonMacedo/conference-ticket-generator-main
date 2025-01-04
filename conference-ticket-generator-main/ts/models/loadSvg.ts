export default function loadSvg(element: Element | null, url: string) {
    if (element instanceof Element) {
        fetch(url)
        .then(response => response.text)
        .then(data => {
            if (typeof (data) === 'string') {
                element.innerHTML = data;
            }
        })
        .catch(error => console.error('Erro ao carregar SVG:', error));
    }
}
