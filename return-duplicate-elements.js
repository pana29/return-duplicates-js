const duplicatesArray = [5, 5, 7, 3, 4, 4, 1];
const duplicate = duplicatesArray.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
console.log(duplicate);

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter((item) => {
  if (set.has(item)) {
    set.delete(item);
  } else {
    return item;
  }
});

console.log(duplicates);
