import * as ifc from 'ifc';
import { defaults } from 'lib/constants';

const defaultConfig: ifc.SettingsConfig = {
	themes: { name: 'classic', colors: defaults.themes },

	colorType: 'sim',
	sortType: 'adj',
	toWeights: { comm: 1, pay: 3, fair: 3, fast: 1 },
	asyncTO: false,
	cacheTO: false,
	toTimeout: 6,

	exportVb: true,
	exportIrc: true,
	exportHwtf: true,
	exportPcp: false,
	exportPco: false,
	exportPcCustomTitle: false,

	notifySound: [false, 'ding'],
	notifyBlink: false,
	notifyTaskbar: false,
	volume: { ding: 1, squee: 1 },
	wildblocks: true,
	showCheckboxes: true,
	hitColor: 'link',
	fontSize: 11,
	shineOffset: 1,

	blockColumn: true,
	requesterColumn: true,
	availableColumn: true,
	durationColumn: false,
	topayColumn: true,
	mastersColumn: true,
	notqualifiedColumn: true,

	pcQueue: false,
	pcQueueMin: 1,

	refresh: 0,
	pages: 1,
	skips: false,
	resultsPerPage: 50,
	batch: 0,
	reward: 0,
	qual: true,
	monly: false,
	mhide: false,
	searchBy: 0,
	invert: false,
	shine: 300,
	minTOPay: 0,
	hideNoTO: false,
	onlyViable: false,
	disableTO: false,
	sortPay: false,
	sortAll: false,
	search: '',
	hideBlock: true,
	onlyIncludes: false,
	shineInc: true,
	sortAsc: false,
	sortDsc: true,
	gbatch: false,
	bubbleNew: false,
	hidePanel: false,

	vbTemplate: defaults.vbTemplate,
	vbSym: '\u2605', // star
};

export default defaultConfig;