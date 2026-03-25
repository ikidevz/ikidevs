import { STATS } from "@/app/data";
import StatItem from "@/app/components/atoms/StatItem";

export default function StatsBar() {
	return (
		<div className='stats-bar anim-6'>
			{STATS.map((s) => (
				<StatItem key={s.l} n={s.n} l={s.l} />
			))}
		</div>
	);
}
