interface SectionTagProps {
	label: string;
}

export default function SectionTag({ label }: SectionTagProps) {
	return <span className='section-tag'>{label}</span>;
}
