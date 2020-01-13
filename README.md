# Web Component Library (ticketing)


<!-- ## Install
```
npm install fig8-web-library
```
```
yarn add fig8-web-library
```
## Usage
---
```
import { Button } from 'fig8-web-library';

const App = () => {
  return (
    <>
      <Button type="primary" >Click Me<Button/>
    </>
  )
};
```

Each component will have it's own documentation.  -->


```
.
├── .storybook
├── dist                    # Compiled files
├── src                     # Source files (component library)
├── stories                 # Story files (story pages)
└── README.md
```

## Initial Setup
---

To get started, run the following commands: 
  ```
    git clone https://github.com/fig8-tech/fig8-web-library.git
    npm install
  ```

Fig8 Library uses Storybook for Component organization and viewing.
see Storybook setup [here](#Storybook)

## Component Library

```
.
├── ...
├── src                               # Source files (component library)
│   ├── assets / style
│   │   ├── color.less                # MOIC Color Scheme
│   │   └── override-theme.less       # override variables for Ant Design
│   │
│   ├── components
│   │   ├── Button
│   │   └── Icon                    
│   │   
│   └── ...
└── ...
```

Each component should be filed under its distinct domain and documented. Any specific styling shall be also included here. 
```
    ├── components
    │   └── Button
    │       ├── button.less           # Styling for Buttons
    │       └── button.md             # Button README.md
```

All Components are exported to `src/components/index.ts`. 
```
~src/components/index.ts

export { default as Button } from './Button/Button';
export { default as Icon } from './Icon/Icon';
```

## Typescript

Components utilizes [Ant Design](https://ant.design/) and wraps it with custom theme and styling. 

Fig8 Component types extends from Ant Design component types. 

```
import Button, { ButtonProps as AntButtonProps } from 'antd/es/button';

interface ButtonProps extends AntButtonProps {}
```

Ant Design is written with `JS Typescript`, for more information on Ant Design, please refer to Ant Design's guidelines and component documentations linked below. 

[Guidelines Document](https://ant.design/docs/spec/introduce)

[Components Document](https://ant.design/docs/react/introduce)

## Storybook

To open storybook, run: 

```
npm run storybook
```

Navigate to  http://localhost:8080 to view the stories. Stories should auto-magically update as you develop.

```
    ├── .storybook
    │   ├── addons.js               # Adds action
    │   ├── config.js               # Adds stories
    │   └── webpack.config.js       
    │    
    ├── stories
    │   ├── ButtonPage.tsx          # Component Page
    │   └── index.tsx               # Story Page
```

All variants of each component should be displayed in its own page. 
```
~stories/ButtonPage.tsx

const ButtonPage = () => {
  return (
    <div>
      <ButtonWrapper 
        type ="primary" 
        onClick={action('Primary Button Clicked')}
      >Primary</ButtonWrapper>

      <ButtonWrapper 
        type ="default" 
        onClick={action('Default Button Clicked')}
      >Primary</ButtonWrapper>
    </div>
  )
}
```

New pages can be added to `stories/index.tsx` 

```
~stories/index.tsx

storiesOf('General', module)
  .add('Button', () => <ButtonPage />);
  .add('Icon', () => <IconPage />);
  .add('Calendar', () => <CalendarPage />);
```

### Color Theme Override 

`src/assets/style/index.less` must be imported in `.storybook/config.js`

---
---

### Issue #1: 
```
Cannot read property 'createElement' of undefined
TypeError: Cannot read property 'createElement' of undefined
```
Solution: 

switch `esModuleInterop` to `true`
```
~tsconfig.json

{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

source: https://github.com/storybookjs/storybook/issues/416