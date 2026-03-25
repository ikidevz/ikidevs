interface SkillPillProps {
	label: string;
}

export default function SkillPill({ label }: SkillPillProps) {
	return <span className='skill-pill'>{label}</span>;
}
