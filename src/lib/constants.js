export const ENV = Object.freeze({
	LEGACY: 'www.mturk.com',
	NEXT: 'worker.mturk.com',
	HOST: window.location.hostname,
	ORIGIN: window.location.origin,
	ISFF: Boolean(window.sidebar),
	VERSION: '4.2.1',
});
export const URL_SELF = 'https://greasyfork.org/en/scripts/10615-hit-scraper-with-export#ugTop';
export const DOC_TITLE = 'HIT Scraper';
export const TO_BASE = 'https://turkopticon.ucsd.edu/';
export const TO_REPORTS = TO_BASE + 'reports?id=';
export const TO_API = TO_BASE + 'api/multi-attrs.php?ids=';

export const ico = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wsTDwctGwJAtQAAAYRJREFUOMudkz1rWmEUx3/6gFeC1A5p6RJByGTGTpEM3iHfwMmxfggH1yyB69BFyFAy5FIQ6wdw9CVxUOhQXFykYFcTLvEaiuafQU0wXoPkwIHnOS8/znPOeWAh18AU0I7qA61lLjfbAl3X1Ww2k+u620AtgP9BTsdx1O/3lUqlNBgM5DhOEGAaWh7eLeEgYywWo1QqMRwO8X2fdrtNsVjcCtkorVKpSJKy2awsy1Imk1Gv19vWh02j53mSpHQ6vctENo2dTkcrGY/HqlarSiaTuwMSiYRqtZomk8kzqNvt7g5YqTFGtm1LkjzPC4wJnEKz2cS2bSKRCMYYAOr1+htTCFtr1EKhoEajId/3NRqNVC6XFY/HF/69LyKfE9bivlikfA72D+H8DHh8e3PyOfAMfJjDj58YoMjvP4bQPVz9g4MU7Ifh7y2EDJgoHB/BqQ3fLuDzAdz14fIXaP6w+okvT8jnRFub+r0mTr6+bmJzVVgLmKw5w1ER/SQiH4O6fw80AJ4AC20qRDxx28IAAAAASUVORK5CYII=';
export const audio0 = 'T2dnUwACAAAAAAAAAAB8mpoRAAAAAFLKt9gBHgF2b3JiaXMAAAAAARErAAAAAAAAkGUAAAAAAACZAU9nZ1MAAAAAAAAAAAAAfJqaEQEAAACHYsq6Cy3///////////+1A3ZvcmJpcx0AAABYaXBoLk9yZyBsaWJWb3JiaXMgSSAyMDA1MDMwNAAAAAABBXZvcmJpcxJCQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBADIAAAYhiGH3knMkFOQSSYpVcw5CKH1DjnlFGTSUsaYYoxRzpBTDDEFMYbQKYUQ1E45pQwiCENInWTOIEs96OBi5zgQGrIiAIgCAACMQYwhxpBzDEoGIXKOScggRM45KZ2UTEoorbSWSQktldYi55yUTkompbQWUsuklNZCKwUAAAQ4AAAEWAiFhqwIAKIAABCDkFJIKcSUYk4xh5RSjinHkFLMOcWYcowx6CBUzDHIHIRIKcUYc0455iBkDCrmHIQMMgEAAAEOAAABFkKhISsCgDgBAIMkaZqlaaJoaZooeqaoqqIoqqrleabpmaaqeqKpqqaquq6pqq5seZ5peqaoqp4pqqqpqq5rqqrriqpqy6ar2rbpqrbsyrJuu7Ks256qyrapurJuqq5tu7Js664s27rkearqmabreqbpuqrr2rLqurLtmabriqor26bryrLryratyrKua6bpuqKr2q6purLtyq5tu7Ks+6br6rbqyrquyrLu27au+7KtC7vourauyq6uq7Ks67It67Zs20LJ81TVM03X9UzTdVXXtW3VdW1bM03XNV1XlkXVdWXVlXVddWVb90zTdU1XlWXTVWVZlWXddmVXl0XXtW1Vln1ddWVfl23d92VZ133TdXVblWXbV2VZ92Vd94VZt33dU1VbN11X103X1X1b131htm3fF11X11XZ1oVVlnXf1n1lmHWdMLqurqu27OuqLOu+ruvGMOu6MKy6bfyurQvDq+vGseu+rty+j2rbvvDqtjG8um4cu7Abv+37xrGpqm2brqvrpivrumzrvm/runGMrqvrqiz7uurKvm/ruvDrvi8Mo+vquirLurDasq/Lui4Mu64bw2rbwu7aunDMsi4Mt+8rx68LQ9W2heHVdaOr28ZvC8PSN3a+AACAAQcAgAATykChISsCgDgBAAYhCBVjECrGIIQQUgohpFQxBiFjDkrGHJQQSkkhlNIqxiBkjknIHJMQSmiplNBKKKWlUEpLoZTWUmotptRaDKG0FEpprZTSWmopttRSbBVjEDLnpGSOSSiltFZKaSlzTErGoKQOQiqlpNJKSa1lzknJoKPSOUippNJSSam1UEproZTWSkqxpdJKba3FGkppLaTSWkmptdRSba21WiPGIGSMQcmck1JKSamU0lrmnJQOOiqZg5JKKamVklKsmJPSQSglg4xKSaW1kkoroZTWSkqxhVJaa63VmFJLNZSSWkmpxVBKa621GlMrNYVQUgultBZKaa21VmtqLbZQQmuhpBZLKjG1FmNtrcUYSmmtpBJbKanFFluNrbVYU0s1lpJibK3V2EotOdZaa0ot1tJSjK21mFtMucVYaw0ltBZKaa2U0lpKrcXWWq2hlNZKKrGVklpsrdXYWow1lNJiKSm1kEpsrbVYW2w1ppZibLHVWFKLMcZYc0u11ZRai621WEsrNcYYa2415VIAAMCAAwBAgAlloNCQlQBAFAAAYAxjjEFoFHLMOSmNUs45JyVzDkIIKWXOQQghpc45CKW01DkHoZSUQikppRRbKCWl1losAACgwAEAIMAGTYnFAQoNWQkARAEAIMYoxRiExiClGIPQGKMUYxAqpRhzDkKlFGPOQcgYc85BKRljzkEnJYQQQimlhBBCKKWUAgAAChwAAAJs0JRYHKDQkBUBQBQAAGAMYgwxhiB0UjopEYRMSielkRJaCylllkqKJcbMWomtxNhICa2F1jJrJcbSYkatxFhiKgAA7MABAOzAQig0ZCUAkAcAQBijFGPOOWcQYsw5CCE0CDHmHIQQKsaccw5CCBVjzjkHIYTOOecghBBC55xzEEIIoYMQQgillNJBCCGEUkrpIIQQQimldBBCCKGUUgoAACpwAAAIsFFkc4KRoEJDVgIAeQAAgDFKOSclpUYpxiCkFFujFGMQUmqtYgxCSq3FWDEGIaXWYuwgpNRajLV2EFJqLcZaQ0qtxVhrziGl1mKsNdfUWoy15tx7ai3GWnPOuQAA3AUHALADG0U2JxgJKjRkJQCQBwBAIKQUY4w5h5RijDHnnENKMcaYc84pxhhzzjnnFGOMOeecc4wx55xzzjnGmHPOOeecc84556CDkDnnnHPQQeicc845CCF0zjnnHIQQCgAAKnAAAAiwUWRzgpGgQkNWAgDhAACAMZRSSimllFJKqKOUUkoppZRSAiGllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimVUkoppZRSSimllFJKKaUAIN8KBwD/BxtnWEk6KxwNLjRkJQAQDgAAGMMYhIw5JyWlhjEIpXROSkklNYxBKKVzElJKKYPQWmqlpNJSShmElGILIZWUWgqltFZrKam1lFIoKcUaS0qppdYy5ySkklpLrbaYOQelpNZaaq3FEEJKsbXWUmuxdVJSSa211lptLaSUWmstxtZibCWlllprqcXWWkyptRZbSy3G1mJLrcXYYosxxhoLAOBucACASLBxhpWks8LR4EJDVgIAIQEABDJKOeecgxBCCCFSijHnoIMQQgghREox5pyDEEIIIYSMMecghBBCCKGUkDHmHIQQQgghhFI65yCEUEoJpZRSSucchBBCCKWUUkoJIYQQQiillFJKKSGEEEoppZRSSiklhBBCKKWUUkoppYQQQiillFJKKaWUEEIopZRSSimllBJCCKGUUkoppZRSQgillFJKKaWUUkooIYRSSimllFJKCSWUUkoppZRSSikhlFJKKaWUUkoppQAAgAMHAIAAI+gko8oibDThwgMQAAAAAgACTACBAYKCUQgChBEIAAAAAAAIAPgAAEgKgIiIaOYMDhASFBYYGhweICIkAAAAAAAAAAAAAAAABE9nZ1MABAgkAAAAAAAAfJqaEQIAAAB89IOyJjhEQUNNRE5TRENHS0xTRllHSEpISUdORk1GSEdISUNHP0ZHS1IhquPYHv5OAgC/7wFATp2pUBdX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';
/*'*/
export const audio1 = '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VVVVVVVVVVVVVQBqs0jMnBWmgKng1FRU32lmZmb+N6/V+w+MygnAXTBSU3/Ffjw4KGwvhYijgbg038TRQL8U3//xv5cO4FZf/z8bdj8V3CpuILkwNl5P8KE+53G3eCoQUAIQxdpeAGCps5MdqtGpNehUFBQFS2qx1bDEzNSDATAKKlIBjsJGEQBFZnmMUrStzKW+pXKVDOZ+hnQ2jloarUNK2iGVjPlUVcHRF4NCI9e2HcNCJ4NQ0eEQlnbmh0FYaUxBTUUzLjk5LjNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kkScD/K0GL+QyBnCYEgHsjBlXAAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=';

export const defaults = {
	themes: {
		whisper: {
			highlight: '#1F3847',
			background: '#232A2F',
			accent: '#00ffff',
			bodytable: '#AFCCDE',
			cpBackground: '#394752',
			toHigh: '#009DFF',
			toGood: '#40B6FF',
			toAverage: '#7ACCFF',
			toLow: '#B5E3FF',
			toPoor: '#DEF1FC',
			hitDB: '#CADA95',
			nohitDB: '#DA95A8',
			unqualified: '#808080',
			reqmaster: '#C1E1F6',
			nomaster: '#D6C1F6',
			defaultText: '#AFCCDE',
			inputText: '#98D6D6',
			secondText: '#808080',
			link: '#003759',
			vlink: '#40F0F0',
			toNone: '#AFCCDE',
			export: '#86939C',
			hover: '#1E303B'
		},
		solDark: {
			highlight: '#657b83',
			background: '#002b36',
			accent: '#b58900',
			bodytable: '#839496',
			cpBackground: '#073642',
			toHigh: '#859900',
			toGood: '#A2BA00',
			toAverage: '#b58900',
			toLow: '#cb4b16',
			toPoor: '#dc322f',
			hitDB: '#82D336',
			nohitDB: '#D33682',
			unqualified: '#9F9F9F',
			reqmaster: '#B58900',
			nomaster: '#839496',
			defaultText: '#839496',
			inputText: '#eee8d5',
			secondText: '#93a1a1',
			link: '#000000',
			vlink: '#6c71c4',
			toNone: '#839496',
			export: '#CCC6B4',
			hover: '#122A30'
		},
		solLight: {
			highlight: '#657b83',
			background: '#fdf6e3',
			accent: '#b58900',
			bodytable: '#657b83',
			cpBackground: '#eee8d5',
			toHigh: '#859900',
			toGood: '#A2BA00',
			toAverage: '#b58900',
			toLow: '#cb4b16',
			toPoor: '#dc322f',
			hitDB: '#82D336',
			nohitDB: '#36D0D3',
			unqualified: '#9F9F9F',
			reqmaster: '#B58900',
			nomaster: '#6C71C4',
			defaultText: '#657b83',
			inputText: '#6FA3A3',
			secondText: '#A6BABA',
			link: '#000000',
			vlink: '#6c71c4',
			toNone: '#657b83',
			export: '#000000',
			hover: '#C7D2D6'
		},
		classic: {
			highlight: '#30302F',
			background: '#131313',
			accent: '#94704D',
			bodytable: '#000000',
			cpBackground: '#131313',
			toHigh: '#66CC66',
			toGood: '#ADFF2F',
			toAverage: '#FFD700',
			toLow: '#FF9900',
			toPoor: '#FF3030',
			hitDB: '#66CC66',
			nohitDB: '#FF3030',
			unqualified: '#9F9F9F',
			reqmaster: '#551A8B',
			nomaster: '#0066CC',
			defaultText: '#94704D',
			inputText: '#000000',
			secondText: '#997553',
			link: '#0000FF',
			vlink: '#800080',
			toNone: '#d3d3d3',
			export: '#000000',
			hover: '#21211F'
		},
		deluge: {
			highlight: '#1F3847',
			background: '#434e56',
			accent: '#fbde2d',
			bodytable: '#f8f8f8',
			cpBackground: '#384147',
			toHigh: '#6FFA3C',
			toGood: '#D9FC35',
			toAverage: '#fbde2d',
			toLow: '#FAB050',
			toPoor: '#FA6F50',
			hitDB: '#d8fa3c',
			nohitDB: '#DA95A8',
			unqualified: '#ADC6EE',
			reqmaster: '#BFADEE',
			nomaster: '#ADEEDF',
			defaultText: '#f8f8f8',
			inputText: '#D8FA3C',
			secondText: '#ADC6EE',
			link: '#99004F',
			vlink: '#DCEEAD',
			toNone: '#97A167',
			export: '#ADC6EE',
			hover: '#426075'
		}
	},
	vbTemplate: '[table][tr][td][b]Title:[/b] [URL=${previewLink}]${title}[/URL] | [URL=${pandaLink}]PANDA[/URL]\n' +
		'[b]Requester:[/b] [URL=${requesterLink}]${requesterName}[/URL] [${requesterId}] ' +
		'([URL=' + TO_REPORTS + '${requesterId}]TO[/URL])\n' +
		'[b]TO Ratings:[/b]\n${toVerbose}\n${toFoot}\n' +
		'[b]Description:[/b] ${description}\n[b]Time:[/b] ${time}\n[b]HITs Available:[/b] ${numHits}\n' +
		'[b]Reward:[/b] [COLOR=green][b]${reward}[/b][/COLOR]\n' +
		'[b]Qualifications:[/b] ${quals}[/td][/tr][/table]'
};

export const kb = { ESC: 27, ENTER: 13 };
