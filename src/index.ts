import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
const reader = new MatchReader(csvFileReader);
reader.load();

let manUnitedWins = 0;

for (let match of reader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin || match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Man United wins: ' + manUnitedWins);



