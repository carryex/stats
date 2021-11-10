import {Analyzer} from '../Summary';
import {MatchData} from '../MatchData';
import {MatchResult} from '../MatchResult';

class WinsAnalysis implements Analyzer{
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let win = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin || match[2] === this.team && match[5] === MatchResult.AwayWin) {
        win++;
      }
    }
    return `Team ${this.team} won ${win} games`;
  };
}

export {WinsAnalysis};