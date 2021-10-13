import type { VercelRequest, VercelResponse } from '@vercel/node';

function queryValue(prop: string | string[]): string {
    return typeof prop === 'string' ? prop : prop[0]!;
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
        size = Number(queryValue(req.query['size'] ?? '20')),
        radius = Number(queryValue(req.query['r'] ?? req.query['radius'] ?? '0')),
        shape = radius >= size / 2
            ? `<circle fill='${color}' cx='${size / 2}' cy='${size / 2}' r='${size / 2}'/>`
            : `<rect fill='${color}' x='0' y='0' width='${size}' height='${size}' rx='${radius}'/>`,
        svg = `<svg ${svgAttr} width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>${shape}</svg>`;
    // set response header
    res.setHeader('Content-Type', 'image/svg+xml');
    // send response
    res.send(svg);
}