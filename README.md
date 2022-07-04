# To Install and run

npm i && npm start

## Description

This repo will host a starter project to set different kind of component patterns. These ones will be compound components, extensible styles, control props, state initializer + function child (Render Props); and ultimately these packages will be published on npm to be reusable as UI components

## Compound Components

Look for branch named the same as this title, this pattern sets components that serve as wrappers (HOC) and are intended to provide other components that work beneath the parent one. In this case a card component was created alongside title, image and button components. These work with shared state and logic using Context API. Second implementation works with parent component wrraping over the same Parent component specific property: <ParentComponent.Child>, this was made with Object.assign and intends to use Typescript functionality and avoid multiple imports.

## Extended Styles

This pattern uses the sam components in compound component logic, it looks to extend styling using className attribute or style attribute tag in order to style the Parent Component (JSX Tag)
