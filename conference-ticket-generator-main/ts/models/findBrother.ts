export default function findBrother (element: Element | null, selector: string) {
    if (element instanceof Element)
    {    const parentElement = element.parentElement;

    if(parentElement instanceof Element) {
        return parentElement.querySelector(selector);
    } else {
        return parentElement
    }}
} 