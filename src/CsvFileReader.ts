import fs from 'fs';

/*
 * A reusable CSV file reader. Splits row seperately into arrays.
 * Inside these rows, splits every column. So we have a two dimensional array.
 */
export class CsvFileReader {
	data: string[][] = [];

	constructor(public file: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.file, { encoding: 'utf-8' })
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			});
	}
}
