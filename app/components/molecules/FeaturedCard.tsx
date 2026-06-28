interface FeaturedCardProps {
	badge?: string;
	coverImg: string;
	tag: string;
	date: string;
	title: string;
	desc: string;
	url: string;
	linkLabel?: string;
	footerTag: string;
}

export default function FeaturedCard({
	badge = "// featured_project",
	coverImg,
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
			<div className='feature-meta'>
				<span className='feature-tag'>TAG</span>
				<span className='feature-date'>JUNE 2026</span>
			</div>
			<div className='feature-img-cover'>
				<img src={coverImg} alt={title} />
			</div>
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
