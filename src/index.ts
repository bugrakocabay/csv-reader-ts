import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an object that satisfies the "DataReader" interface
const csvReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in the csv object, which satisfies "DataReader"
const matchReader = new MatchReader(csvReader);
matchReader.load();

// Create an instance of Summary, feeding WinsAnalysis and ConsoleReport into it.
const summary = Summary.winsAnalysisHtmlReport('Brighton');

summary.buildAndPrintReport(matchReader.matches);
