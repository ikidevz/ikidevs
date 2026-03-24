import { STATS } from '@/app/data'

export default function StatsBar() {
  return (
    <div className="stats-bar anim-6">
      {STATS.map(s => (
        <div key={s.l} className="stat-item">
          <div className="stat-n">{s.n}</div>
          <div className="stat-l">{s.l}</div>
        </div>
      ))}
    </div>
  )
}
