import SkillPill from "@/app/components/atoms/SkillPill";

interface SkillCardProps {
	title: string;
	pills: string[];
}

export default function SkillCard({ title, pills }: SkillCardProps) {
	return (
		<div className='skill-card'>
			<div className='skill-card-title'>{title}</div>
			<div className='skill-list'>
				{pills.map((p) => (
					<SkillPill key={p} label={p} />
				))}
			</div>
		</div>
	);
}
