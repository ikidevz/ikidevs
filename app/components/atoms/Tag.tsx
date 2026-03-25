interface TagProps {
	href?: string;
	children: React.ReactNode;
	ariaLabel?: string;
}

export default function Tag({ href, children, ariaLabel }: TagProps) {
	if (href) {
		return (
			<a
				href={href}
				className='tag tag-link'
				aria-label={ariaLabel}
				target='_blank'
				rel='noopener noreferrer'>
				{children}
			</a>
		);
	}
	return <span className='tag'>{children}</span>;
}
