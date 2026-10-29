import { items } from './items.js'

const STORES = {
  'amazon.com': 'Amazon',
  'homedepot.com': 'Home Depot',
  'harborfreight.com': 'Harbor Freight',
  'morrflate.com': 'MORRflate',
}

function storeName(link) {
  const host = new URL(link).hostname.replace(/^www\./, '')
  return STORES[host] ?? host
}

export default function App() {
  return (
    <>
      <header className="header">
        <h1>🎄 Christmas List 2026</h1>
        <p className="intro">
          Tap <strong>“View at …”</strong> on any item to open the store page.
        </p>
      </header>

      <main className="list">
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </main>

      <footer className="footer">Prices are approximate. Check the store for today’s price.</footer>
    </>
  )
}

function Item({ item }) {
  return (
    <article className="card">
      <div className="photo">
        {item.image ? (
          <img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt="" loading="lazy" />
        ) : (
          <span className="placeholder" aria-hidden="true">🎁</span>
        )}
      </div>

      <div className="body">
        {item.type === 'idea' && <span className="badge">Anything similar works</span>}
        <h2 className="name">{item.name}</h2>
        {item.note && <p className="note">{item.note}</p>}
        <p className={item.price ? 'price' : 'price price-unknown'}>
          {item.price ?? 'Check store for price'}
        </p>

        {item.link ? (
          <a className="buy" href={item.link} target="_blank" rel="noopener noreferrer">
            View at {storeName(item.link)} <span aria-hidden="true">→</span>
          </a>
        ) : (
          <p className="no-link">No specific link. Any store is fine.</p>
        )}
      </div>
    </article>
  )
}
