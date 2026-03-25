import { type ThemeId } from "@/app/data";

interface ThemeOptionProps {
	id: ThemeId;
	label: string;
	swatch: string;
	active: boolean;
	onSelect: (id: ThemeId) => void;
}

export default function ThemeOption({
	id,
	label,
	swatch,
	active,
	onSelect,
}: ThemeOptionProps) {
	return (
		<button
			className={`theme-option${active ? " active" : ""}`}
			onClick={() => onSelect(id)}>
			<span className='theme-swatch' style={{ background: swatch }} />
			{label}
		</button>
	);
}
