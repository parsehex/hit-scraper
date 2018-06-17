import * as ifc from 'ifc';
import Interface from 'Interface';
import Settings from 'Settings';
import Themes from 'Themes';
import { Exporter } from 'Exporter';
import { cleanTemplate } from 'lib/util';
import { IGNORE_KEY } from 'lib/constants';

function setDefaultBlocks() {
	// TODO seems like this should go under Settings? (make static method for it)
	return localStorage.setItem(IGNORE_KEY,
		'oscar smith^diamond tip research llc^jonathan weber^jerry torres^' +
		'crowdsource^we-pay-you-fast^turk experiment^jon brelig^p9r^scoutit');
}

export const EditorDefault = {
	setDefaultBlocks,
};

export class Editor {
	node: HTMLElement;
	type: string;
	caller: HTMLElement;

	constructor(type: string, caller?: HTMLElement) {
		Interface.toggleOverflow('on');
		this.node = document.body.appendChild(document.createElement('DIV'));
		this.node.classList.add('pop');
		this.type = type;
		this.caller = caller || null;

		switch (type) {
			case 'include':
			case 'ignore':
				if (type === 'ignore' && !localStorage.getItem(IGNORE_KEY)) setDefaultBlocks();

				const btnStyle = 'margin:5px auto;width:50%;color:white;background:black;';

				const blocklist = cleanTemplate(`
					<b>BLOCKLIST</b> - &nbsp;
					Edit the blocklist with what you want to ignore/hide. &nbsp;
					Separate requester names and HIT titles with the &nbsp;
					<code>^</code> character. &nbsp;
					After clicking "Save", you'll need to scrape again to apply the changes.
					<br />
					<button id="clearIds">
						Clear HIT IDs
					</button>
				`);
				const includelist = cleanTemplate(`
					<b>INCLUDELIST</b> - &nbsp;
					Focus the results on your favorite requesters. &nbsp;
					Separate requester names and HIT titles with the ' +
					'<code>^</code> character. When the "Restrict to includelist" option is selected, ' +
					'HIT Scraper only shows results matching the includelist.'
				`);
				var titleText = type === 'ignore' ? blocklist : includelist;

				this.node.innerHTML = cleanTemplate(`
					<div style="width:500px">
						${titleText}
					</div>
					<textarea style="display:block;height:200px;width:500px;font:12px monospace" placeholder="nothing here yet">
						${localStorage.getItem(IGNORE_KEY.replace('ignore', type)) || ''}
					</textarea>
					<button id="edSave" style="${btnStyle}">
						Save
					</button>
					<button id="edCancel" style="${btnStyle}">
						Cancel
					</button>
				`);
				if (type === 'ignore') {
					this.node.querySelector('#clearIds').addEventListener('click', () => {
						const textarea = this.node.querySelector('textarea');
						textarea.value = textarea.value.replace(/\^\w{30}/g, '');
					});
				}
				this.node.querySelector('#edSave').addEventListener('click', () => {
					localStorage.setItem(IGNORE_KEY.replace('ignore', type), this.node.querySelector('textarea').value.trim());
					this.die();
				});
				break;
			case 'theme':
				var dlbody = [];
				var _th = Settings.user.themes;
				var split = (obj: ifc.BasicObject) => {
					var a = [];
					for (var k in obj) if (obj.hasOwnProperty(k)) a.push({ k: k, v: obj[k] });
					return a.sort((a, b) => a.k < b.k ? -1 : 1);
				};
				var _colors = split(_th.colors[_th.name]);
				var _dd: { [K in keyof ifc.ThemeColors]: string } = {
					highlight: 'Distinguishes between active and inactive states in the control panel',
					background: 'Background color',
					accent: 'Color of spacer text (and control panel buttons on themes other than \'classic\')',
					bodytable: 'Default color of text elements in the results table (this is ignored if HIT coloring is set to \'cell\')',
					cpBackground: 'Background color of the control panel',
					toHigh: 'Color for results with high TO',
					toGood: 'Color for results with good TO',
					toAverage: 'Color for results with average TO',
					toLow: 'Color for results with low TO',
					toPoor: 'Color for results with poor TO',
					toNone: 'Color for results with no TO',
					hitDB: 'Designates that a match was found in your HITdb',
					nohitDB: 'Designates that a match was not found in your HITdb',
					unqualified: 'Designates that you do not have the qualifications necessary to work on the HIT',
					reqmaster: 'Designates HITs that require Masters',
					nomaster: 'Designates HITs that do not require Masters',
					defaultText: 'Default text color',
					inputText: 'Color of input boxes in the control panel',
					secondText: 'Color for text used on selected control panel items',
					link: 'Default color of unvisited links',
					vlink: 'Default color of visited links',
					export: 'Color of buttons in the results table--export and block buttons',
					hover: 'Color of control panel options on mouseover'
				};
				var define = (k: string) => '<div style="margin-left:37px">' + _dd[k] + '</div>';
				for (var r of _colors)
					dlbody.push(`<dt>${r.k}</dt><dd><div class="icbutt"><input data-key="${r.k}" type="color" value="${r.v}" /></div>${define(r.k)}</dd>`);
				this.node.innerHTML = '<b>THEME EDITOR</b><p></p><div style="height:87%;overflow:auto"><dl>' + dlbody.join('') + '</dl></div>' +
					'<button id="edSave" style="margin:5px auto;width:33%;color:white;background:black">Save</button>' +
					'<button id="edDefault" style="margin:5px auto;width:33%;color:white;background:black">Restore Default</button>' +
					'<button id="edCancel" style="margin:5px auto;width:33%;color:white;background:black">Cancel</button>';
				this.node.style.height = '57%';
				Array.from(this.node.querySelectorAll('.icbutt')).forEach((v: HTMLElement) => {
					const input = <HTMLInputElement>v.firstChild;
					v.style.background = input.value;
					input.onchange = e => {
						const target = <HTMLInputElement>e.target;
						var k = target.dataset.key;
						v.style.background = target.value;
						_th.colors[_th.name][k] = target.value;
						Themes.apply(_th.name, Settings.user.hitColor);
					};
				});
				this.node.querySelector('#edDefault').addEventListener('click', () => {
					_th.colors[_th.name] = Themes.default[_th.name];
					Themes.apply(_th.name, Settings.user.hitColor);
					this.die();
					new Editor('theme');
				});
				this.node.querySelector('#edSave').addEventListener('click', () => {
					Settings.save();
					this.die();
				});
				break;
			case 'vbTemplate':
				this.node.innerHTML = '<b>VBULLETIN TEMPLATE</b><div style="float:right;margin-bottom:5px">Ratings Symbol: ' +
					`<input style="text-align:center" type="text" size="1" maxlength="1" value="${Settings.user.vbSym}" /></div>` +
					'<textarea style="display:block;height:200px;width:500px;font:12px monospace">' +
					Settings.user.vbTemplate + '</textarea>' +
					'<button id="edSave" style="margin:5px auto;width:33%;color:white;background:black">Save</button>' +
					'<button id="edDefault" style="margin:5px auto;width:33%;color:white;background:black">Restore Default</button>' +
					'<button id="edCancel" style="margin:5px auto;width:33%;color:white;background:black">Cancel</button>';
				this.node.querySelector('#edDefault').addEventListener('click', () => {
					this.node.querySelector('textarea').value = Settings.defaults.vbTemplate;
					(<HTMLButtonElement>this.node.querySelector('#edSave')).click();
				});
				this.node.querySelector('#edSave').addEventListener('click', () => {
					Settings.user.vbTemplate = this.node.querySelector('textarea').value.trim();
					Settings.user.vbSym = this.node.querySelector('input').value;
					Settings.save();
					this.die();
					new Exporter(<any>{ target: this.caller });
				});
				break;
		}
		this.node.querySelector('#edCancel').addEventListener('click', () => this.die());
	}
	die() {
		Interface.toggleOverflow('off');
		this.node.remove();
	}
}
