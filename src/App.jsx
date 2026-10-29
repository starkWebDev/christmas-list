import { useState } from 'react'
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

const FILTERS = [
  { id: 'all', label: 'Everything' },
  { id: 'exact', label: 'Exact items' },
  { id: 'idea', label: 'Ideas' },
]

export default function App() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? items : items.filter((item) => item.type === filter)

  return (
    <>
      <header className="header">
        <h1>🎄 Christmas List 2026</h1>
        <p className="intro">
          Tap <strong>“View at …”</strong> on any item to open the store page.
        </p>
        <dl className="legend">
          <div>
            <dt><span className="badge badge-exact">Exact item</span></dt>
            <dd>Please get this specific one.</dd>
          </div>
          <div>
            <dt><span className="badge badge-idea">Idea</span></dt>
            <dd>Anything similar works.</dd>
          </div>
        </dl>
      </header>

      <nav className="filters" aria-label="Show">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className="filter"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <main className="list">
        {shown.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </main>

      <footer className="footer">Prices are approximate. Check the store for today’s price.</footer>
    </>
  )
}

function Item({ item }) {
  const isExact = item.type === 'exact'

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
        <span className={`badge ${isExact ? 'badge-exact' : 'badge-idea'}`}>
          {isExact ? 'Exact item' : 'Idea'}
        </span>
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
