const { fromEvent } = rxjs
const { debounceTime, map } = rxjs.operators

const logger = document.getElementById('log')
const button = document.getElementById('test-button')

function print(message) {
  logger.innerHTML +=
    '<span style="color:red">time: </span>' + message + '<br />'
}

const clicks = fromEvent(button, 'click')
const result = clicks.pipe(
  map(() => new Date().toTimeString()),
  debounceTime(1000)
)
result.subscribe(x => print(x))
