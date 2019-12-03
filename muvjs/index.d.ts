
export interface View {
  elementType: keyof HTMLElementTagNameMap,
  attributes: any,
  children: any,
  genKey: (parentKey?: string, index?: number) => void,
  render: (parentKey?: string, index?: number) => Node
}

export type Component<T extends keyof HTMLElementTagNameMap> = (attributes?: any) => (...children: any) => View;
export function component<T extends keyof HTMLElementTagNameMap>(elementType: T): Component<T>;

export function rerender(parent: HTMLElement | null): (oldView: View) => (newView: View) => (index: number) => void;

export const div: Component<'div'>;
export const button: Component<'button'>;
export const label: Component<'label'>;
export const input: Component<'input'>;
export const textarea: Component<'textarea'>;
export const ul: Component<'ul'>;
export const li: Component<'li'>;
export const img: Component<'img'>;
export const a: Component<'a'>;
export const abbr: Component<'abbr'>;
export const address: Component<'address'>;
export const area: Component<'area'>;
export const article: Component<'article'>;
export const aside: Component<'aside'>;
export const audio: Component<'audio'>;
export const b: Component<'b'>;
export const base: Component<'base'>;
export const bdo: Component<'bdo'>;
export const blockquote: Component<'blockquote'>;
export const body: Component<'body'>;
export const br: Component<'br'>;
export const canvas: Component<'canvas'>;
export const caption: Component<'caption'>;
export const cite: Component<'cite'>;
export const code: Component<'code'>;
export const col: Component<'col'>;
export const colgroup: Component<'colgroup'>;
export const datalist: Component<'datalist'>;
export const dd: Component<'dd'>;
export const del: Component<'del'>;
export const details: Component<'details'>;
export const dfn: Component<'dfn'>;
export const dialog: Component<'dialog'>;
export const dl: Component<'dl'>;
export const dt: Component<'dt'>;
export const em: Component<'em'>;
export const embed: Component<'embed'>;
export const fieldset: Component<'fieldset'>;
export const figcaption: Component<'figcaption'>;
export const figure: Component<'figure'>;
export const footer: Component<'footer'>;
export const form: Component<'form'>;
export const head: Component<'head'>;
export const header: Component<'header'>;
export const h1: Component<'h1'>;
export const h2: Component<'h2'>;
export const h3: Component<'h3'>;
export const h4: Component<'h4'>;
export const h5: Component<'h5'>;
export const h6: Component<'h6'>;
export const hr: Component<'hr'>;
export const html: Component<'html'>;
export const i: Component<'i'>;
export const iframe: Component<'iframe'>;
export const ins: Component<'ins'>;
export const kbd: Component<'kbd'>;
export const legend: Component<'legend'>;
export const link: Component<'link'>;
export const map: Component<'map'>;
export const mark: Component<'mark'>;
export const menu: Component<'menu'>;
export const meta: Component<'meta'>;
export const meter: Component<'meter'>;
export const nav: Component<'nav'>;
export const object: Component<'object'>;
export const ol: Component<'ol'>;
export const optgroup: Component<'optgroup'>;
export const option: Component<'option'>;
export const output: Component<'output'>;
export const p: Component<'p'>;
export const param: Component<'param'>;
export const pre: Component<'pre'>;
export const progress: Component<'progress'>;
export const q: Component<'q'>;
export const s: Component<'s'>;
export const samp: Component<'samp'>;
export const script: Component<'script'>;
export const section: Component<'section'>;
export const select: Component<'select'>;
export const small: Component<'small'>;
export const source: Component<'source'>;
export const span: Component<'span'>;
export const strong: Component<'strong'>;
export const style: Component<'style'>;
export const sub: Component<'sub'>;
export const summary: Component<'summary'>;
export const sup: Component<'sup'>;
export const table: Component<'table'>;
export const tbody: Component<'tbody'>;
export const td: Component<'td'>;
export const tfoot: Component<'tfoot'>;
export const th: Component<'th'>;
export const thead: Component<'thead'>;
export const tr: Component<'tr'>;
export const time: Component<'time'>;
export const title: Component<'title'>;
export const track: Component<'track'>;
export const u: Component<'u'>;
export const varElement: Component<'var'>;
export const video: Component<'video'>;

export type MUV<M,U,V,I,S,A,E> = {
  model: M,
  update: (m: M) => (a: A) => { model: M, effects?: E[] },
  view: (d: (a: A) => void) => (m: M) => View,
  ignition?: (d: (a: A) => void) => void,
  subscriptions?: (d: (a: A) => void) => (e: E) => void
};

export function muv<M,U,V,I,S,A,E>(muv: MUV<M,U,V,I,S,A,E>): (rootId: string) => void;
