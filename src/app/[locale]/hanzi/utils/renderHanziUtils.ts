// UTILS FOR RENDER HANZI FUNCTION INSIDE WRITER COMPONENT
/**
 * Remove previous hanzi from the canvas
 * @param childNodes 
 */
export function cleanUpCanvas(childNodes: NodeListOf<ChildNode>): void {
  Object.values(childNodes).map((childNode) => childNode.remove())
}

export function createHanziBackground(canvas: HTMLDivElement): SVGSVGElement {
  function setLineAttributes(
    element: SVGLineElement,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    stroke: string
  ) {
    element.setAttribute('x1', x1.toString())
    element.setAttribute('y1', y1.toString())
    element.setAttribute('x2', x2.toString())
    element.setAttribute('y2', y2.toString())
    element.setAttribute('stroke', stroke)
  }

  const background = canvas.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))

  const horizontalLine = background.appendChild(document.createElementNS('http://www.w3.org/2000/svg','line'))
  const verticalLine = background.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'line'))
  const diagonalLine = background.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'line'))
  const diagonalLine2 = background.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'line'))

  setLineAttributes(horizontalLine, 0, 0, 100, 100, '#AAA')
  setLineAttributes(verticalLine, 100, 0, 0, 100, '#AAA')
  setLineAttributes(diagonalLine, 50, 0, 50, 100, '#AAA')
  setLineAttributes(diagonalLine2, 0, 50, 100, 50, '#AAA')

  background.style.border = '1px solid #AAA'

  return background
}