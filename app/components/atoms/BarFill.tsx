interface BarFillProps {
	name: string;
	pct: number;
	dim?: boolean;
}

export default function BarFill({ name, pct, dim }: BarFillProps) {
	return (
		<div className='skill-row'>
			<span className='skill-name'>{name}</span>
			<div className='bar-bg'>
				<div
					className={`bar-fill${dim ? " mid" : ""}`}
					style={{ width: `${pct}%` }}
				/>
			</div>
		</div>
	);
}
