'use client'
import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#home',      label: '~/home'      },
  { href: '#resume',    label: '~/resume'    },
  { href: '#projects',  label: '~/projects'  },
  { href: '#analytics', label: '~/analytics' },
  { href: '#contact',   label: '~/contact'   },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.3 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="terminal-bar">
      <div className="t-dots">
        <div className="t-dot" style={{ background: '#ff5f57' }} />
        <div className="t-dot" style={{ background: '#febc2e' }} />
        <div className="t-dot" style={{ background: '#28c840' }} />
      </div>
      <span className="t-url">ikigami-devs.vercel.app</span>
      <div className="t-nav">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={active === href.slice(1) ? 'active' : ''}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
