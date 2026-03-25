interface FeaturedCardProps {
	badge?: string;
	title: string;
	desc: string;
	url: string;
	linkLabel: string;
	footerTag: string;
}

export default function FeaturedCard({
	badge = "// featured_project",
	title,
	desc,
	url,
	linkLabel,
	footerTag,
}: FeaturedCardProps) {
	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='featured-card'>
			<div className='featured-badge'>{badge}</div>
			<div className='featured-title'>{title}</div>
			<div className='featured-desc'>{desc}</div>
			<div className='featured-footer'>
				<span className='featured-link'>→ {linkLabel}</span>
				<span className='featured-ftag'>{footerTag}</span>
			</div>
		</a>
	);
}
