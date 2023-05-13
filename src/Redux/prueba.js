const myFavorites = [
  {
    778: [
      "Gotron Pilot",
      "https://rickandmortyapi.com/api/character/avatar/778.jpeg",
    ],
  },
  {
    334: [
      "Stealy",
      "https://rickandmortyapi.com/api/character/avatar/334.jpeg",
    ],
  },
  {
    565: [
      "Debrah",
      "https://rickandmortyapi.com/api/character/avatar/565.jpeg",
    ],
  },
];

const filtrar = () => {
  const resultado = myFavorites.filter((favorite) =>
    Object.hasOwn(favorite, "2")
  );

  return resultado;
};
console.log(Object.hasOwn(myFavorites, 515));
