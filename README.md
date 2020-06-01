## React Tinder Cards

> A new card swiping experience

![](https://img.shields.io/github/last-commit/GavBaros/react-tinder-cards.svg?style=flat)
![](https://img.shields.io/github/repo-size/GavBaros/react-tinder-cards.svg?style=flat)
![](https://img.shields.io/david/GavBaros/react-tinder-cards.svg?style=flat)

This project uses 'react-spring' and 'react-gesture' libraries and is an extension of an example from the 'react-gesture' page. It is a re-imagined concept of swiping at tinder cards.

Images are from Unsplash and bios are from a Google search of the funniest ones.

## Demo

https://tinder-cards.firebaseapp.com

## Preview

![](tinder.gif)

## Installation

```sh
git clone https://github.com/GavBaros/react-tinder-cards.git
cd react-tinder-cards
npm install
npm start
```

## Usage

To add a new card, simply change the `data.js` file and populate the array with a new object.
Be sure to provide an image url for the `pics` key and fill the `name`, `age`, `distance` and `text` keys as well.

## Acknowledgements

[1]: https://github.com/react-spring
[2]: https://github.com/drcmda

The core foundation of this project was an extension of this [React Spring][1]'s card example. Credit goes to [drcmda][2] for that.
