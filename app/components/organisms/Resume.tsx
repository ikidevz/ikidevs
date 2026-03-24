import { EXPERIENCE, SKILL_CARDS, CERTIFICATIONS } from "@/app/data";

export default function Resume() {
	return (
		<section id='resume' className='section'>
			{/* Experience */}
			<div className='section-header'>
				<span className='section-tag'>~/resume</span>
				<h2 className='section-title'>Experience</h2>
				<div className='section-line' />
			</div>
			<div className='exp-grid'>
				{EXPERIENCE.map((e) => (
					<div key={e.company} className='exp-item'>
						<div className='exp-date'>{e.date}</div>
						<div>
							<div className='exp-role'>{e.role}</div>
							<div className='exp-company'>{e.company}</div>
							<div className='exp-desc'>{e.desc}</div>
						</div>
					</div>
				))}
			</div>

			{/* Skills */}
			<div className='section-header mt'>
				<span className='section-tag'>~/resume</span>
				<h2 className='section-title'>Skills</h2>
				<div className='section-line' />
			</div>
			<div className='skills-grid'>
				{SKILL_CARDS.map((c) => (
					<div key={c.title} className='skill-card'>
						<div className='skill-card-title'>{c.title}</div>
						<div className='skill-list'>
							{c.pills.map((p) => (
								<span key={p} className='skill-pill'>
									{p}
								</span>
							))}
						</div>
					</div>
				))}
			</div>

			{/* Certifications */}
			<div className='section-header mt'>
				<span className='section-tag'>~/resume</span>
				<h2 className='section-title'>Certifications</h2>
				<div className='section-line' />
			</div>
			<div className='certs-grid'>
				{CERTIFICATIONS.map((c) => (
					<a
						key={c.name}
						href={c.url}
						className='cert-card'
						target='_blank'
						rel='noopener noreferrer'>
						<div className='cert-icon'>[✓]</div>
						<div>
							<div className='cert-name'>{c.name}</div>
							<div className='cert-org'>{c.org}</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
