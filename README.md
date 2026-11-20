[![make.fun — news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/ibnuyau/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/ibnuyau/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

# 20 November 2026 — World News in One Image

Entry for the make.fun bounty
[`news-image-20261120`](https://make.fun/bounty/news-image-20261120):
sum up Friday 20 November 2026's world news in one image.

## The image

`entry.png` is a 1024×1024 newspaper front page drawn programmatically
(Python + PIL, real text throughout so every headline stays legible):

1. **Trump puts Iran decision off until 2027** — "not rushing" new
   strikes; "see what happens after January 1", flying home from the
   Shenzhen summit; Senate Republicans rejected a war-powers bill.
2. **Houthi missile hits Riyadh's tallest tower** — windows blown out
   across seven to eight floors of the PIF Tower, the Saudi wealth
   fund's HQ; no injuries reported.
3. **JPMorgan, Visa and Mastercard hit in vendor hack** — gang "n0n"
   leaked data of about 16,000 wealthy JPMorgan customers; card numbers
   were not touched.
4. **Anthropic shares close 17% higher on debut** — first day valued at
   $1.76 trillion after the largest IPO in history, $81bn at $83 a share.
5. **Four nations urge Israel to let Gaza aid in** — Australia, Canada,
   Italy and the UK, as floods swamped Gaza's tents; about 150,000 tents
   held at the border.
6. **Nicholls' 175\* carries New Zealand to 368** — day two of the first
   Test against India in Wellington; Bumrah 4-92, India 16 for 0 at tea.

Plus an "Also today" strip: Taiwan steadying stocks, the Las Vegas GP
first practice washed out by rain, and Cyclone Akvan nearing India's
east coast. Every story was first reported on 20 November 2026.

Sources (all published 20 November 2026): Reuters via BusinessWorld and
Devdiscourse, The Hindu BusinessLine, The Times of India, The Paris Eye,
IANS / ESPNcricinfo, formula1.com and the FIA.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. No network, no randomness — two runs
write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
