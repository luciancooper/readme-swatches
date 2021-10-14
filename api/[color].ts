import type { VercelRequest, VercelResponse } from '@vercel/node';

function queryValue(prop: string | string[]): string {
    return typeof prop === 'string' ? prop : prop[0]!;
}

type SwatchStyle = 'square' | 'round' | 'circle';

function resolveStyle(prop: string, fallback: SwatchStyle): SwatchStyle {
    return (prop === 'square' || prop === 'round' || prop === 'circle') ? prop : fallback;
}

function parseColor(color: string): string | null {
    if (!/^#?(?:[0-9a-f]{6}|[0-9a-f]{3})$/i.test(color)) return null;
    let hex = color.replace(/^#?/, '').toUpperCase();
    if (hex.length === 3) hex = [...hex].map((h) => h + h).join('');
    return `#${hex}`;
}

const svgAttr = "xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'";

export default function endpoint(req: VercelRequest, res: VercelResponse) {
    const color = parseColor(queryValue(req.query['color']!)) ?? '#000000',
        style = resolveStyle(queryValue(req.query['style'] ?? 'square').toLowerCase(), 'square'),
        size = Number(queryValue(req.query['size'] ?? '20')),
        top = Number(queryValue(req.query['top'] ?? req.query['t'] ?? '0')),
        bottom = Number(queryValue(req.query['bottom'] ?? req.query['b'] ?? '2')),
        left = Number(queryValue(req.query['left'] ?? req.query['l'] ?? '0')),
        right = Number(queryValue(req.query['right'] ?? req.query['r'] ?? '0')),
        width = left + size + right,
        height = top + size + bottom;
    // create swatch shape
    let shape: string;
    if (style !== 'circle') {
        const radius = style === 'round' ? size / 5 : 0;
        shape = `<rect fill='${color}' x='${left}' y='${top}' width='${size}' height='${size}' rx='${radius}'/>`;
    } else {
        shape = `<circle fill='${color}' cx='${left + size / 2}' cy='${top + size / 2}' r='${size / 2}'/>`;
    }
    // set response header
    res.setHeader('Content-Type', 'image/svg+xml');
    // send response
    res.send(`<svg ${svgAttr} width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>${shape}</svg>`);
}