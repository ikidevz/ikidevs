export default function Contact() {
	const details = [
		{ label: "phone", val: "(+639) 763 351 225" },
		{ label: "email", val: "ikigamidevs@gmail.com" },
		{ label: "location", val: "Davao City, Philippines" },
		{ label: "github", val: "github.com/ikigamisama" },
	];

	return (
		<section id='contact' className='section'>
			<div className='section-header'>
				<span className='section-tag'>~/contact</span>
				<h2 className='section-title'>Let&apos;s Work Together</h2>
				<div className='section-line' />
			</div>
			<div className='contact-wrap'>
				<div className='contact-left'>
					<div className='contact-title'>Open to opportunities</div>
					<p className='contact-sub'>
						Actively seeking mid-level Data Engineer roles — remote or PH-based.
						Open to collaboration on modern data stack projects, fintech
						pipelines, and real-time systems.
					</p>
					<div className='hero-btns'>
						<a href='mailto:franzmonzales@gmail.com' className='btn-primary'>
							./send_email.sh
						</a>
						<a
							href='https://github.com/ikigamisama'
							target='_blank'
							rel='noopener noreferrer'
							className='btn-ghost'>
							github profile
						</a>
					</div>
				</div>
				<div className='contact-right'>
					{details.map(({ label, val }) => (
						<div key={label} className='contact-item'>
							<div className='contact-label'>{label}</div>
							<div className='contact-val'>{val}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
