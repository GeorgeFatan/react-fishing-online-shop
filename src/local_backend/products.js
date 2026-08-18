//lansete
import lansetaSpiningImg from "../assets/lanseta-spinning-scaled.jpg";
import lansetaBottomFishingImg from "../assets/lanseta-bottom-fishing.jpg";
import lansetaCastingImg from "../assets/lanseta-casting-fishing.jpg.png";
import lansetaPlutaImg from "../assets/lanseta-normala-pluta.jpg.png";

//mulinete
import mulinetaImg from "../assets/mulineta-baitcasting.jpg";
import mulinetaDaiwaImg from "../assets/mulineta-daiwa.png";
import mulinetaColmicImg from "../assets/mulineta-colmic-9-1-rulmenti.png";

//plumbi
import plumbiImg from "../assets/lant-plumbi.jpg";
import plumbBottomImg from "../assets/plumbi-feder-bottom.png";
import plumbCarpImg from "../assets/plumbi-feder-carp.png";

//carlige
import carligImg from "../assets/carliguri.jpg";
import carligCarpImg from "../assets/carligeCarp.png";
import carligSomnImg from "../assets/carligeCatFish.png";
import carligJigheadImg from "../assets/carligeJighead.png";

//lingurite
import woblerImg from "../assets/wobleri.jpg";
import castingSpoon20 from "../assets/casting-spoon2-0.jpg";
import castingSpoo40 from "../assets/casting-spoon4-0.jpg";

//linii
import fisingLineImg from "../assets/fishingLine.jpg";
import firMonofilament from "../assets/fir-monofilament-jaxon.png";
import firTextil from "../assets/fir-textil-jaxon.png";

//accesorii
import accesoriiImg from "../assets/accesorii.png";
import cutiePescuit from "../assets/cutie-pescuit.png";
import husaPescuit from "../assets/husa-pescuit.png";
import rucsacPescuit from "../assets/rucsac-pescuit.png";

const products = [
  {
    id: 1,
    name: "Lanseta spinning telescopica",
    category: "Lansete",
    price: 145.99,
    description:
      "Lanseta usoara si rezistenta, ideala pentru pescuit la stiuca si biban.",
    image: lansetaSpiningImg,
    inStock: true,
  },
  {
    id: 2,
    name: "Mulineta baitcasting",
    category: "Mulinete",
    price: 329.5,
    description:
      "Mulineta precisa pentru pescuit de competitie, cu frana reglabila si rulmenti durabili.",
    image: mulinetaImg,
    inStock: true,
  },
  {
    id: 3,
    name: "Lant de plumbi mix",
    category: "Plumbi",
    price: 39.9,
    description:
      "Set de plumbi de diverse greutati, potrivit pentru pescuit la crap si somn.",
    image: plumbiImg,
    inStock: true,
  },
  {
    id: 4,
    name: "Carliguri otel carbon 20buc",
    category: "Carlige",
    price: 24.0,
    description:
      "Carlige rezistente din otel carbon, perfecte pentru monturi de rapitor si nada.",
    image: carligImg,
    inStock: true,
  },
  {
    id: 5,
    name: "Momeala artificiala, pachet de mai multe lingurite",
    category: "Momeala-artificiala",
    price: 54.0,
    description:
      "Wobler realist pentru pescuitul rapitorilor in ape dulci si salbatice.",
    image: woblerImg,
    inStock: false,
  },
  {
    id: 6,
    name: "Linii de pescuit fluorocarbon",
    category: "Linii",
    price: 89.99,
    description:
      "Fir fluorocarbon 0.35 mm, rezistent la abraziune si invizibil in apa.",
    image: fisingLineImg,
    inStock: true,
  },
  {
    id: 7,
    name: "Accesorii pescuit",
    category: "Accesorii",
    price: 179.0,
    description:
      "Aici poti gasi o varietate de accesorii pentru pescuit, inclusiv cutii,genti frigorifice, haine, palarii, suporti undite...",
    image: accesoriiImg,
    inStock: true,
  },
  {
    id: 8,
    name: "Lanseta bottom fishing",
    category: "Lansete",
    price: 162.99,
    description: "Lanseta specializata pentru pescuit la fund.",
    image: lansetaBottomFishingImg,
    inStock: true,
  },
  {
    id: 9,
    name: "Lanseta casting",
    category: "Lansete",
    price: 104.99,
    description: "Lanseta pentru pescuitul de tip casting.",
    image: lansetaCastingImg,
    inStock: true,
  },
  {
    id: 10,
    name: "Lanseta normala pluta",
    category: "Lansete",
    price: 100.99,
    description: "Lanseta normala pentru pescuit la pluta.",
    image: lansetaPlutaImg,
    inStock: true,
  },
  {
    id: 11,
    name: "Carlige Carp 10buc",
    category: "Carlige",
    price: 24.0,
    description:
      "Carlige carp de diverse marimi, perfecte pentru pescuitul la carp.",
    image: carligCarpImg,
    inStock: true,
  },
  {
    id: 12,
    name: "Carliguri somn 10-20buc",
    category: "Carlige",
    price: 24.0,
    description:
      "Carlige somn de diverse marimi, perfecte pentru pescuitul la somn.",
    image: carligSomnImg,
    inStock: true,
  },
  {
    id: 13,
    name: "Carliguri jigsaw 10-20buc",
    category: "Carlige",
    price: 24.0,
    description:
      "Carlige jigsaw de diverse marimi, perfecte pentru pescuitul la momeala artificiala.",
    image: carligJigheadImg,
    inStock: true,
  },
  {
    id: 14,
    name: "Lingurita 2/0",
    category: "Momeala-artificiala",
    price: 15.99,
    description:
      "Lingurita speciala culoarea rosie pentru pescuit la spinning. Marimea 2/0",
    image: castingSpoon20,
    inStock: true,
  },
  {
    id: 15,
    name: "Lingurita 4/0",
    category: "Momeala-artificiala",
    price: 18.99,
    description: "Lingurita speciala pentru pescuit la spinning. Marimea 4/0",
    image: castingSpoo40,
    inStock: true,
  },
  {
    id: 16,
    name: "Plumbi feeder bottom",
    category: "Plumbi",
    price: 25.99,
    description:
      "Set de plumbi pentru feeding, greutati, potrivit pentru pescuit la crap si somn.",
    image: plumbBottomImg,
    inStock: true,
  },
  {
    id: 17,
    name: "Plumbi pescuit carp feeder",
    category: "Plumbi",
    price: 35.99,
    description: "Set de plumbi pentru pescuit la carp, cu feeder.",
    image: plumbCarpImg,
    inStock: true,
  },
  {
    id: 18,
    name: "Mulineta Daiwa",
    category: "Mulinete",
    price: 254.99,
    description: "Mulineta Daiwa precisa pentru pescuit de competitie.",
    image: mulinetaDaiwaImg,
    inStock: true,
  },
  {
    id: 19,
    name: "Mulineta colmic 9 rulmenti",
    category: "Mulinete",
    price: 367.5,
    description: "Mulineta Colmic, 9 rulmenti durabili.",
    image: mulinetaColmicImg,
    inStock: true,
  },
  {
    id: 20,
    name: "Fir pescuit JAXON monofilament",
    category: "Linii",
    price: 54.99,
    description: "Fir monofilament Jaxon, rezistent.",
    image: firMonofilament,
    inStock: true,
  },
  {
    id: 21,
    name: "Fir pescuit JAXON textil",
    category: "Linii",
    price: 65.99,
    description: "Fir textil Jaxon, rezistent.",
    image: firTextil,
    inStock: true,
  },
  {
    id: 22,
    name: "Rucsac pescuit",
    category: "Accesorii",
    price: 59.99,
    description: "Acest rucsac este perfect pentru o drumetie la pescuit.",
    image: rucsacPescuit,
    inStock: true,
  },
  {
    id: 23,
    name: "Husa bete pescuit",
    category: "Accesorii",
    price: 120.0,
    description: "In aceasta husa poti cara maxim 5 bete de pescuit.",
    image: husaPescuit,
    inStock: true,
  },
  {
    id: 24,
    name: "Cutie pescuit",
    category: "Accesorii",
    price: 179.0,
    description:
      "Aceasta cutie este menita sa depoziteze accesoriile necesare unditei.",
    image: cutiePescuit,
    inStock: true,
  },
];

export function getProducts() {
  return products;
}
