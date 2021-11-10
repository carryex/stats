import { MatchData } from "./MatchData";

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(repost: string): void;
}

class Summary {
  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void{
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());

export {Summary, Analyzer,OutputTarget}