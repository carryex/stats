import { MatchData } from "./MatchData";
import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {HtmlReport} from './reportTargets/HtmlReport';
import { ConsoleReport } from "./reportTargets/ConsoleReport";

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(repost: string): void;
}

class Summary {
  static winsAnalysesWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    );
  }
  static winsAnalysesWithConsoleReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new ConsoleReport()
    );
  }
  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void{
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}

export {Summary, Analyzer,OutputTarget}