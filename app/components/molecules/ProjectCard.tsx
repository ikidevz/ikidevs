interface ProjectCardProps {
	tag: string;
	date: string;
	title: string;
	desc: string;
	url: string;
	linkLabel?: string;
}

export default function ProjectCard({
	tag,
	date,
	title,
	desc,
	url,
	linkLabel = "→ github.com/ikigamisama",
}: ProjectCardProps) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='project-card'>
			<div className='proj-meta'>
				<span className='proj-tag'>{tag}</span>
				<span className='proj-date'>{date}</span>
			</div>
			<div className='proj-title'>{title}</div>
			<div className='proj-desc'>{desc}</div>
			<div className='proj-link'>{linkLabel}</div>
		</a>
	);
}
