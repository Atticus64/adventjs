export default function contarOvejas(ovejas) {
  return ovejas
    .filter((o) => o.color === "rojo")
    .filter((o) =>
      o.name.toLowerCase().includes("a") && o.name.toLowerCase().includes("n")
    );
}

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

console.log(contarOvejas(ovejas));
