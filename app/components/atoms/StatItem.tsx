interface StatItemProps {
	n: string;
	l: string;
}

export default function StatItem({ n, l }: StatItemProps) {
	return (
		<div className='stat-item'>
			<div className='stat-n'>{n}</div>
			<div className='stat-l'>{l}</div>
		</div>
	);
}
