import CertIcon from "@/app/components/atoms/CertIcon";

interface CertCardProps {
	name: string;
	org: string;
	url: string;
}

export default function CertCard({ name, org, url }: CertCardProps) {
	return (
		<a
			href={url}
			className='cert-card'
			target='_blank'
			rel='noopener noreferrer'>
			<CertIcon />
			<div>
				<div className='cert-name'>{name}</div>
				<div className='cert-org'>{org}</div>
			</div>
		</a>
	);
}
