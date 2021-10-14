# Readme Color Swatches

Simple inline color swatches for Github README files, like this <a href='#'><img valign='middle' alt='#CC0066' src='https://readme-swatches.vercel.app/CC0066'/></a> or <a href='#'><img valign='middle' alt='#0080FF' src='https://readme-swatches.vercel.app/0080FF?style=circle'/></a> or <a href='#'><img valign='middle' alt='#009900' src='https://readme-swatches.vercel.app/009900?style=round'/></a> !

## Usage

Add your hex color code to the end of the URL like this (omit the `#`):

[`https://readme-swatches.vercel.app/0080FF`](https://readme-swatches.vercel.app/0080FF)

And add any of the following query parameters to the end of the URL to customize the swatch:

| Parameter | Description | Default |
|:--|:--|:-:|
| `style` | The style of the swatch, can be `square`, `round`, or `circle`. | `square` |
| `size` | The size of the swatch. | `20` |
| `top` | The top padding of the swatch. The shorthand `t` is also accepted.  | `0` |
| `bottom` | The bottom padding of the swatch. The shorthand `b` is also accepted. | `2` |
| `left` | The left padding of the swatch. The shorthand `l` is also accepted. | `0` |
| `right` | The right padding of the swatch. The shorthand `r` is also accepted. | `0` |

Swatches can be embedded using markdown syntax like this:

`![blue](https://readme-swatches.vercel.app/0080FF)`

**But this is not recommended** as the swatches vertical alignment will be off. For the best results, use an `<img>` tag with the `valign` attribute set to `'middle'` like this:

`<img valign='middle' alt='blue' src='https://readme-swatches.vercel.app/0080FF'/>`

## Sample

| | `square` | `round` | `circle` | | `square` | `round` | `circle` |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|`#F4F269`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/F4F269'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/F4F269?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/F4F269?style=circle'/></a>|`#E0AAFF`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/E0AAFF'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/E0AAFF?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/E0AAFF?style=circle'/></a>|
|`#CEE26B`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/CEE26B'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/CEE26B?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/CEE26B?style=circle'/></a>|`#C77DFF`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/C77DFF'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/C77DFF?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/C77DFF?style=circle'/></a>|
|`#A8D26D`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/A8D26D'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/A8D26D?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/A8D26D?style=circle'/></a>|`#9D4EDD`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/9D4EDD'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/9D4EDD?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/9D4EDD?style=circle'/></a>|
|`#82C26E`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/82C26E'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/82C26E?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/82C26E?style=circle'/></a>|`#7B2CBF`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/7B2CBF'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/7B2CBF?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/7B2CBF?style=circle'/></a>|
|`#5CB270`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/5CB270'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/5CB270?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/5CB270?style=circle'/></a>|`#5A189A`|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/5A189A'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/5A189A?style=round'/></a>|<a href='#'><img valign='middle' src='https://readme-swatches.vercel.app/5A189A?style=circle'/></a>|

## License

[MIT](LICENSE)
