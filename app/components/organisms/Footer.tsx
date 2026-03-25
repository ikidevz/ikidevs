import { SOCIAL_LINKS } from "@/app/data";
import { getIcon } from "@/app/components/atoms/Icons";

export default function Footer() {
	return (
		<footer>
			<div className='footer-l'>Franz Monzales © 2026</div>
			<div className='footer-social'>
				{SOCIAL_LINKS.map(({ label, url, icon }) => (
					<a
						key={icon}
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='footer-social-link'>
						{getIcon(icon, 16)}
						{label}
					</a>
				))}
			</div>
		</footer>
	);
}
