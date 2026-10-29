// The Christmas list. Edit this file to add, remove, or change items.
// Items show on the page in the order they appear here.
//
// Fields:
//   name   – what shows as the title
//   type   – 'exact' (this specific item) or 'idea' (shows "Anything similar works")
//   price  – text shown as the price, e.g. '$34.97' or 'About $20–$40'.
//            Leave as null to show "Check store for price".
//   link   – product page URL, or null if there's no specific link
//   image  – file name in public/images/, or null for a placeholder
//   note   – optional extra detail shown under the title

export const items = [
  {
    name: 'Milwaukee PACKOUT 5-Compartment Small Parts Organizer',
    type: 'exact',
    price: 'About $35',
    link: 'https://www.homedepot.com/p/Milwaukee-PACKOUT-5-Compartments-Small-Parts-Organizer-48-22-8435/303005752',
    image: 'packout-5.webp',
  },
  {
    name: 'Husky 3/8 in. Drive Flex Head Extendable Ratchet',
    type: 'exact',
    price: '$46.97',
    link: 'https://www.homedepot.com/p/Husky-3-8-in-Drive-Flex-Head-Extendable-Ratchet-H38FERAT/206038328',
    image: 'husky-ratchet.jpg',
  },
  {
    name: 'Milwaukee PACKOUT 11-Compartment Small Parts Organizer',
    type: 'exact',
    price: 'About $50',
    link: 'https://www.homedepot.com/p/Milwaukee-PACKOUT-11-Compartment-Impact-Resistant-Portable-Small-Parts-Organizer-48-22-8430/303005741',
    image: 'packout-11.webp',
  },
  {
    name: 'Owala FreeSip 40 oz Water Bottle',
    type: 'exact',
    price: '$39.99',
    link: 'https://www.amazon.com/dp/B0C59CRT4M',
    image: 'owala-40oz.jpg',
    note: 'Foggy Tide or Neon Moon colors are first choice, but any color is fine.',
  },
  {
    name: 'ICON G2 3/8 in. Drive 4-3/4 in. Stubby Flex Ratchet',
    type: 'exact',
    price: '$44.99',
    link: 'https://www.harborfreight.com/g2-38-in-drive-4-34-in-stubby-flex-ratchet-70425.html',
    image: 'icon-stubby-ratchet.jpg',
  },
  {
    name: 'Owala FreeSip Sway 64 oz Water Bottle',
    type: 'exact',
    price: '$54.99',
    link: 'https://www.amazon.com/dp/B0H69B4H7C',
    image: 'owala-64oz.jpg',
    note: 'Greenhouse color is first choice, black is second, but any color is fine.',
  },
  {
    name: 'MORRflate QuikLok Auto Deflators',
    type: 'exact',
    price: '$50',
    link: 'https://morrflate.com/products/morrflate-quiklok-auto-deflators',
    image: 'morrflate.jpg',
  },
  {
    name: 'Home Depot gift card',
    type: 'idea',
    price: 'Any amount',
    link: null,
    image: null,
    note: 'For tools or a tool chest.',
  },
  {
    name: 'Rolling mechanic seat',
    type: 'idea',
    price: '$34.99',
    link: 'https://www.harborfreight.com/pneumatic-adjustable-roller-seat-46319.html',
    image: 'roller-seat.jpg',
    note: 'Any rolling mechanic seat works. The link is just an example.',
  },
  {
    name: 'Flexzilla Air Hose, 1/4 in. x 50 ft.',
    type: 'exact',
    price: '$29.00',
    link: 'https://www.amazon.com/dp/B000R8LH3E',
    image: 'flexzilla.jpg',
  },
  {
    name: 'Window rain guards for a 100-series Land Cruiser',
    type: 'exact',
    price: '$61.42',
    link: 'https://www.amazon.com/dp/B07KC5LVKK',
    image: 'rain-guards.jpg',
    note: 'Fits 1998–2007 Toyota Land Cruiser.',
  },
  {
    name: '3/8 in. drive breaker bar',
    type: 'idea',
    price: 'About $20–$40',
    link: null,
    image: null,
  },
  {
    name: '1/2 in. drive breaker bar',
    type: 'idea',
    price: 'About $25–$50',
    link: null,
    image: null,
  },
]
