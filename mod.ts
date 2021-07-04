// INTERFACES
interface Args {
    attrs?: {},
    content?: any[]
}

// UTILS
const toKV = (attrs: {} = {}) => Object.entries(attrs).map(kv => `${kv[0]}="${kv[1]}"`).join(" ");
const group = (list: any) => list.join('');
const get_content = (args?: Args) => args === undefined || !args.hasOwnProperty('content') ? '' :
    typeof args.content === 'object' ? group(args.content) : args.content || '';

// CORE
export const tag_open = (name: string = '', args: Args = {}) =>
    `<${name}${args.hasOwnProperty('attrs') && Object.keys(args.attrs!).length > 0 ? ' ' + toKV(args.attrs) : ''}>`;
export const tag = (name: string = '', args?: Args) => `${tag_open(name, args)}${get_content(args)}</${name}>`;

// COMMON TAGS
export const br = () => tag_open('br', {attrs: {}, content: []});
export const img = (src: string = '') => tag_open('img', {attrs: {src: src}, content: []});
export const ul = (args: Args = {attrs: {}, content: []}) => tag('ul', args);
export const li = (args = {attrs: {}, content: []}) => tag('li', args);
export const div = (args: Args = {attrs: {}, content: []}) => tag('div', args);
export const a = (href: string = '', content: any = '') => tag('a', {attrs: {href: href}, content: content});
export const script = (src: string, content?: any) => tag('script', {attrs: {src: src}, content: content})
