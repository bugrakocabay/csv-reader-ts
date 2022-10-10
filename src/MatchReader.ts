import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';

/*
 * An interface that defines the types of readers.
 */
interface DataReader {
	read(): void;
	data: string[][];
}

/*
 * Matchreader is responsible for loading the data from other readers(e.g CsvFileReader).
 * Then, manipulate types of every cell accordingly.
 */
export class MatchReader {
	matches: MatchData[] = []; // This where "load" methods outcome is stored.

	constructor(public reader: DataReader) {}

	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map((row: string[]): MatchData => {
			return [
				dateStringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				row[5] as MatchResult,
				row[6],
			];
		});
	}
}
