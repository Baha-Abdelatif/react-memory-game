export const cardsDatas = [
  { src: '/cards/angular.svg', matched: false },
  { src: '/cards/backbone.svg', matched: false },
  { src: '/cards/bootstrap.svg', matched: false },
  { src: '/cards/css3.svg', matched: false },
  { src: '/cards/git.svg', matched: false },
  { src: '/cards/github.svg', matched: false },
  { src: '/cards/html5.svg', matched: false },
  { src: '/cards/javascript.svg', matched: false },
  { src: '/cards/mongodb.svg', matched: false },
  { src: '/cards/nodejs.svg', matched: false },
  { src: '/cards/postgresql.svg', matched: false },
  { src: '/cards/python.svg', matched: false },
  { src: '/cards/react.svg', matched: false },
  { src: '/cards/ruby.svg', matched: false },
  { src: '/cards/stackoverflow.svg', matched: false },
  { src: '/cards/swift.svg', matched: false },
  { src: '/cards/symfony.svg', matched: false },
  { src: '/cards/terminal.svg', matched: false },
  { src: '/cards/visualstudio.svg', matched: false },
  { src: '/cards/wordpress.svg', matched: false },
];
export const duplicateArray = (arrayToDuplicate) => [
  ...arrayToDuplicate,
  ...arrayToDuplicate,
];
export const shuffleArray = (arrayToshuffle) =>
  arrayToshuffle.sort(() => 0.5 - Math.random());
