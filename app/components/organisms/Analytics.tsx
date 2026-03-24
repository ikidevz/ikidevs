import { ANALYTICS_PROJECTS } from "@/app/data";

export default function Analytics() {
	return (
		<section id='analytics' className='section'>
			<div className='section-header'>
				<span className='section-tag'>~/projects</span>
				<h2 className='section-title'>Analytics &amp; Visualization</h2>
				<div className='section-line' />
			</div>

			<div className='analytics-grid'>
				{ANALYTICS_PROJECTS.map((p) => (
					<a
						key={p.title}
						href={p.url}
						target='_blank'
						rel='noopener noreferrer'
						className='project-card'>
						<div className='proj-meta'>
							<span className='proj-tag'>{p.tag}</span>
							<span className='proj-date'>{p.date}</span>
						</div>
						<div className='proj-title'>{p.title}</div>
						<div className='proj-desc'>{p.desc}</div>
						<div className='proj-link'>→ github.com/ikigamisama</div>
					</a>
				))}
			</div>
		</section>
	);
}
