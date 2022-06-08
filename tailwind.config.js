let theme = require('@artilleryio/alpha-centauri-theme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    {
      pattern: /(bg|text|border|ring)-(red|green|blue|transparent|beige|gray|black|orange|yellow|purple)-(100|200|300|400|default|600|700|800|900)/,
      variants: ['hover', 'focus', 'group-hover'],
    },
    {
      pattern: /text-(xmicro|micro|xxxsm|xxsm|xsm|md|10xl)/
    },
    'font-mono'
  ],
  theme,
  plugins: [],
}
