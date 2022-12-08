import box from "./box.ts";
function fitsInOneBoxTs(boxes: box[]) {
  return boxes.sort((a: box, b: box) => (b.l * b.w * b.h) - (a.l * a.w * a.h))
    .every((b: box, index) => {
      if (!boxes[index + 1]) return true;
      return (
        b.l > boxes[index + 1].l && b.w > boxes[index + 1].w &&
        b.h > boxes[index + 1].h
      );
    });
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];

console.log("Reto 4 en Ts 🐢");
const res = { fitsInOneBox: fitsInOneBoxTs(boxes) }; // true
console.log(res);
