import fs from 'fs';
import path from 'path';

const day1Solver = () => {
  const calories: number[] = [];
  let sum = 0;

  fs.readFileSync(path.join(__dirname, 'input_1.txt'))
    .toString()
    .split('\n')
    .forEach(el => {
      if (!el.length) {
        calories.push(sum);
        sum = 0;
        return;
      }

      sum += +el;
    });

  calories.sort().reverse();

  console.log('Max calories: ', calories[0]);
  console.log('Max 3 calories: ', calories[0] + calories[1] + calories[2]);
}

export default day1Solver;
