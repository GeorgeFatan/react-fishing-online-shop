import lansetaImg from '../assets/lanseta-spinning-scaled.jpg';
import mulinetaImg from '../assets/mulineta-baitcasting.jpg';
import plumbiImg from '../assets/lant-plumbi.jpg';
import carligImg from '../assets/carliguri.jpg';
import woblerImg from '../assets/wobleri.jpg';
import fisingLineImg from '../assets/fishingLine.jpg';
import accesoriiImg from '../assets/accesorii.png';

const products = [
  {
    id: 1,
    name: 'Lanseta spinning telescopica',
    category: 'Lansete',
    price: 145.99,
    description: 'Lanseta usoara si rezistenta, ideala pentru pescuit la stiuca si biban.',
    image: lansetaImg,
    inStock: true,
  },
  {
    id: 2,
    name: 'Mulineta baitcasting',
    category: 'Mulinete',
    price: 329.5,
    description: 'Mulineta precisa pentru pescuit de competitie, cu frana reglabila si rulmenti durabili.',
    image: mulinetaImg,
    inStock: true,
  },
  {
    id: 3,
    name: 'Lant de plumbi mix',
    category: 'Plumbi',
    price: 39.9,
    description: 'Set de plumbi de diverse greutati, potrivit pentru pescuit la crap si somn.',
    image: plumbiImg,
    inStock: true,
  },
  {
    id: 4,
    name: 'Carliguri otel carbon 20buc',
    category: 'Carlige',
    price: 24.0,
    description: 'Carlige rezistente din otel carbon, perfecte pentru monturi de rapitor si nada.',
    image: carligImg,
    inStock: true,
  },
  {
    id: 5,
    name: 'Momeala artificiala',
    category: 'Momeala-artificiala',
    price: 54.0,
    description: 'Wobler realist pentru pescuitul rapitorilor in ape dulci si salbatice.',
    image: woblerImg,
    inStock: false,
  },
  {
    id: 6,
    name: 'Linii de pescuit fluorocarbon',
    category: 'Linii',
    price: 89.99,
    description: 'Fir fluorocarbon 0.35 mm, rezistent la abraziune si invizibil in apa.',
    image: fisingLineImg,
    inStock: true,
  },
  {
    id: 7,
    name: 'Accesorii pescuit',
    category: 'Accesorii',
    price: 179.0,
    description: 'Aici poti gasi o varietate de accesorii pentru pescuit, inclusiv cutii,genti frigorifice, haine, palarii, suporti undite...',
    image: accesoriiImg,
    inStock: true,
  },
];

export function getProducts() {
  return products;
}
