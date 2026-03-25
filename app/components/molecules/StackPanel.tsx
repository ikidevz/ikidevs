import BarFill from "@/app/components/atoms/BarFill";

interface StackSkill {
	name: string;
	pct: number;
	dim?: boolean;
}

interface StackPanelProps {
	skills: StackSkill[];
}

export default function StackPanel({ skills }: StackPanelProps) {
	return (
		<div className='side-panel anim-left'>
			<div className='side-panel-title'>// stack.yml</div>
			{skills.map((s) => (
				<BarFill key={s.name} name={s.name} pct={s.pct} dim={s.dim} />
			))}
		</div>
	);
}
