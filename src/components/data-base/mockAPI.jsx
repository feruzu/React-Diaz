const data = [
  {
    id: 1,
    title: "Peeling",
    price: 1100,
    stock: 5,
    img: "/img/1.jpg",
    category: "exfoliantes",
    detail:
      "Cras quis est fermentum, rutrum magna eget, sodales massa. Morbi ut dolor mi. Donec dignissim orci id nibh pulvinar, a dignissim erat condimentum. Integer posuere est sed quam fringilla rutrum.",
  },
  {
    id: 2,
    title: "Ácido glicólico",
    price: 900,
    stock: 5,
    img: "/img/2.jpg",
    category: "exfoliantes",
    detail:
      "Cras quis est fermentum, rutrum magna eget, sodales massa. Morbi ut dolor mi. Donec dignissim orci id nibh pulvinar, a dignissim erat condimentum. Integer posuere est sed quam fringilla rutrum.",
  },
  {
    id: 3,
    title: "Ácido Ascórbico Etilado",
    price: 900,
    stock: 5,
    img: "/img/3.jpg",
    category: "vitaminas",
    detail:
      "Cras quis est fermentum, rutrum magna eget, sodales massa. Morbi ut dolor mi. Donec dignissim orci id nibh pulvinar, a dignissim erat condimentum. Integer posuere est sed quam fringilla rutrum.",
  },
  {
    id: 4,
    title: "Ácido Hialurónico",
    price: 1250,
    stock: 5,
    img: "/img/4.jpg",
    category: "hidratantes",
    detail:
      "Cras quis est fermentum, rutrum magna eget, sodales massa. Morbi ut dolor mi. Donec dignissim orci id nibh pulvinar, a dignissim erat condimentum. Integer posuere est sed quam fringilla rutrum.",
  },
  {
    id: 5,
    title: "Limpiador de Escualeno",
    price: 1800,
    stock: 5,
    img: "/img/5.jpg",
    category: "hidratantes",
    detail:
      "Cras quis est fermentum, rutrum magna eget, sodales massa. Morbi ut dolor mi. Donec dignissim orci id nibh pulvinar, a dignissim erat condimentum. Integer posuere est sed quam fringilla rutrum.",
  },
];

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function getOneData(idItem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemFind = data.find((item) => item.id === Number(idItem));

      if (itemFind) resolve(itemFind);
      else reject(new Error(`Item no encontrado`));
    }, 2000);
  });
}

export function getItemsByCategory(categoria){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemFind = data.filter((item) => item.category === (categoria));
      if (itemFind) resolve(itemFind);
      else reject(new Error(`Item no encontrado`));
    }, 2000);
  });
}

export default data;
