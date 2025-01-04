export default function findBrother (element: Element, selector: string) {
    const parentElement = element.parentElement;

    if(parentElement instanceof Element) {
        return parentElement.querySelector(selector);
    } else {
        return parentElement
    }
} 