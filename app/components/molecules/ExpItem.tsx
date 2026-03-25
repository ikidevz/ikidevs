interface ExpItemProps {
	date: string;
	role: string;
	company: string;
	desc: string;
}

export default function ExpItem({ date, role, company, desc }: ExpItemProps) {
	return (
		<div className='exp-item'>
			<div className='exp-date'>{date}</div>
			<div>
				<div className='exp-role'>{role}</div>
				<div className='exp-company'>{company}</div>
				<div className='exp-desc'>{desc}</div>
			</div>
		</div>
	);
}
