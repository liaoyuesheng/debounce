# @liaoys/debounce

A debounce function.

See [example](https://liaoyuesheng.github.io/debounce/)

## Installation
```
npm install @liaoys/debounce
```
## Usage

```javascript
import debounce from '@liaoys/debounce'

const debounceHandler = debounce((e) => {
  console.log(e.target.scrollTop)
}, 200)

window.addEventListener('scroll', debounceHandler);
```

## API

### debounce(callback: (...args: any[]) => void, delay?: number): (...args: any[]) => void

Returns `Function`

Debounce execution of a function.

#### callback

Type: `Function`

The original function executed after delay milliseconds.

#### delay

Type: `number`

Default: `100`

Debounce delay. Unit: ms.
