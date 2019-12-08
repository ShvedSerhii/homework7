const { fromEvent } = rxjs
const { debounceTime, map } = rxjs.operators

const old = console.log
const logger = document.getElementById("log")
console.log = function(message) {
  logger.innerHTML +=
    "<span style='color:red'>time: </span>" + message + "<br />"
  old(message)
}

const button = document.getElementById("test-button")
const clicks = fromEvent(button, "click")
const result = clicks.pipe(
  map(() => new Date().toTimeString()),
  debounceTime(1000)
)
result.subscribe(x => console.log(x))
