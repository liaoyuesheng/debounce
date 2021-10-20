export default function debounce(callback: (...args: any[]) => void, delay = 100): (...args: any[]) => void {
  let timeoutID
  return function (...args) {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
