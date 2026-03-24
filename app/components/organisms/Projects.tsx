import { HIGHLIGHT_PROJECTS } from "@/app/data";

export default function Projects() {
	return (
		<section id='projects' className='section'>
			<div className='section-header'>
				<span className='section-tag'>~/projects</span>
				<h2 className='section-title'>Highlight Projects</h2>
				<div className='section-line' />
			</div>

			<a
				href='https://modern-data-stack-cheat-sheet-ikigami.streamlit.app'
				target='_blank'
				rel='noopener noreferrer'
				className='featured-card'>
				<div className='featured-badge'>// featured_project</div>
				<div className='featured-title'>Modern Data Stack Cheat Sheet</div>
				<div className='featured-desc'>
					An interactive Streamlit web app I built — a practical,
					engineering-focused reference guide covering tools, patterns, and
					decisions in the modern data ecosystem. Live and deployed.
				</div>
				<div className='featured-footer'>
					<span className='featured-link'>
						→ modern-data-stack-cheat-sheet-ikigami.streamlit.app
					</span>
					<span className='featured-ftag'>Streamlit · Live App</span>
				</div>
			</a>
			<div className='projects-grid'>
				{HIGHLIGHT_PROJECTS.map((p) => (
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
