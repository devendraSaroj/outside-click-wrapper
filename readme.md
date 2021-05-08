# outside-click-wrapper

<a href="https://github.com/devendraSaroj/outside-click-wrapper/blob/master/LICENSE">
<img alt="NPM" src="https://img.shields.io/npm/l/outside-click-wrapper">
</a>

![NPM License](https://img.shields.io/npm/l/outside-click-wrapper)
![NPM Size](https://img.shields.io/bundlephobia/min/outside-click-wrapper)
![NPM Version](https://img.shields.io/npm/v/outside-click-wrapper)

`outside-click-wrapper` is a light-weight react component that detects the click events occurring outside of wrapped elements.

## Installation

```bash
npm install outside-click-wrapper
```

## Usage

### Default Example

```javascript
import React, { Component } from "react";
import { OutsideClickWrapper } from "outside-click-wrapper";

export default class DropdownOption extends Component {
  render() {
    return (
      <OutsideClickWrapper
        onOutsideClick={() => console.log("clicked outside of this element")}
      >
        <div className="dropdwon-container">
          <li> 1st option </li>
          <li> 2nd option </li>
        </div>
      </OutsideClickWrapper>
    );
  }
}
```

### Example without extra div

```javascript
import React, { Component } from "react";
import { OutsideClickWrapper } from "outside-click-wrapper";

/**
 * In this example inner div wrapping li elements is discarded
 * meaning outside-click-wrapper can itself act as a container for wrapped
 * elements
 */

export default class DropdownOption extends Component {
  render() {
    return (
      <OutsideClickWrapper
        className="dropdwon-container"
        onOutsideClick={() => console.log("clicked outside of this element")}
      >
        <li> 1st option </li>
        <li> 2nd option </li>
      </OutsideClickWrapper>
    );
  }
}
```

## Props

### `className?: string;`

The `className` property is used to set the custom `className` of the component.

### `style?: { [key: string]: string };`

The `style` property is used to set the custom `style` of the component.

## Callback

### `onOutsideClick?: OutsideClickCallback;`

The `OutsideClickCallback` returns the MouseEvent.

```javascript
export type OutsideClickCallback = (e: MouseEvent | TouchEvent) => void;
```

### `onClick?: OnClickCallback;`

The `OnClickCallback` returns the MouseEvent. This comes handy when the component itself acts as a container.

```javascript
export type OnClickCallback = (e: MouseEvent | TouchEvent) => void;
```

## Changelog

#### v1.1.1

- callback returns MouseEvents

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

`outside-click-wrapper` is licensed under [MIT License](https://github.com/devendraSaroj/outside-click-wrapper/blob/master/LICENSE)
