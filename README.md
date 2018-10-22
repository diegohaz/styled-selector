# styled-selector

[![Generated with nod](https://img.shields.io/badge/generator-nod-2196F3.svg?style=flat-square)](https://github.com/diegohaz/nod)
[![NPM version](https://img.shields.io/npm/v/styled-selector.svg?style=flat-square)](https://npmjs.org/package/styled-selector)
[![Build Status](https://img.shields.io/travis/diegohaz/styled-selector/master.svg?style=flat-square)](https://travis-ci.org/diegohaz/styled-selector) [![Coverage Status](https://img.shields.io/codecov/c/github/diegohaz/styled-selector/master.svg?style=flat-square)](https://codecov.io/gh/diegohaz/styled-selector/branch/master)

Get static CSS(-in-JS) selectors (like `.sc-htpNat`) from React components

> **Note**: 
>
> This library relies on implementation details of libraries mentioned in [Usage](#usage) so as to get component selectors. Styled Components, for example, has a `.styledComponentId` property, whereas Emotion uses the `.toString()` method. 
>
> This means that they can break it in patch versions. If this happens, we'll release a fix here as soon as possible. For more information, see our [code](https://github.com/diegohaz/styled-selector/blob/master/src/index.ts).

## Install

    $ npm i styled-selector

## Usage

### [Styled Components](https://github.com/styled-components/styled-components)
```js
import styled from "styled-components";
import s from "styled-selector";

const Comp = styled.div``;

s(Comp); // .sc-htpNat
```

### [Emotion](https://github.com/emotion-js/emotion)
```js
import styled, { css } from "react-emotion";
import s from "styled-selector";

const Comp = styled("div")``;

s(Comp); // .css-htpNat

const className = css``;

s(className); // .css-htpNat
```

### [Reuse](https://github.com/diegohaz/reuse)
```js
import styled from "styled-components";
import use from "reuse";
import s from "styled-selector";

const Comp = use(styled.div``);

s(Comp); // .sc-htpNat
```

### Custom
```jsx
import React from "react";
import s from "styled-selector";

const Comp = () => <div id="foo" />;
Comp.selector = "#foo";

s(Comp); // #foo
```

## License

MIT © [Haz](https://github.com/diegohaz)
