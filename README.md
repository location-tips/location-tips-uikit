# White label UI Kit

- [Result](#result)
- [Structure](#structure)
- [Installation](#installation)
- [Library](#library)
- [Storybook](#storybook)

## <a name="result"></a>Result

- https://dk4dkhcaucc0a.cloudfront.net/uikit-react/
- https://dk4dkhcaucc0a.cloudfront.net/uikit-angular/

## <a name="structure"></a>Structure

Monorepo consist of 4 projects

### uikit

Main folder splitted to:

- `atoms` contains the basic components such as `MButton` `MIcon` `MInput`, etc. Each component has common style and two implementations for react and angular
- `molecules` big components, composition from atoms
- `organisms` something like page or form
- `styles` this folder contains basic styles extracted from figma using `uikit-figma` service
- `icons` icons catalog from figma
- `fonts` fonts for brands
- `types` typescript types
- `utils` any useful functions 

### uikit-angular

Folder contains configs for angular uikit and storybook config for angular uikit

### uikit-react

Folder contains configs for react uikit and storybook config for react uikit

### uikit-figma

Next.js 14 app with following functionality:

- http://localhost:4200/vars Load variables from figma
- http://localhost:4200/icon-types Load icons from icons folder (create types and json file for storybook)

To start it, use following command:
```
nx run uikit-figma:serve
```

## <a name="installation"></a>Installation

```
npm install
```

## <a name="library"></a>Library

### Build

- React library
```
npm run build:react
```
- Angular library
```
npm run build:angular
```

### Test

``Nothing to say yet``

### Deploy

``Nothing to say yet``

## <a name="storybook"></a>Storybook

### Run

- Run storybook for react
```
npm run storybook:react
```
- Run storybook for angular
```
npm run storybook:angular
```

### Build

- Run storybook for react
```
npm run storybook:react:build
```
- Run storybook for angular
```
npm run storybook:angular:build
```

### Deploy
you need to install firebase tookit globally

```
sudo npm install -g firebase-tools
```
then deploy
```
firebase deploy
```

### Tests

- Start all tests
```
npm run test
```

- React tests
```
nx run uikit-react:test
```

- Angular tests
```
nx run uikit-angular:test
```

### Cache

Sometimes you need to reset nx cache
```
nx reset
```