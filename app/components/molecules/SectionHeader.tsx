import SectionTag from "@/app/components/atoms/SectionTag";

interface SectionHeaderProps {
	tag: string;
	title: string;
	mt?: boolean;
}

export default function SectionHeader({ tag, title, mt }: SectionHeaderProps) {
	return (
		<div className={`section-header${mt ? " mt" : ""}`}>
			<SectionTag label={tag} />
			<h2 className='section-title'>{title}</h2>
			<div className='section-line' />
		</div>
	);
}
