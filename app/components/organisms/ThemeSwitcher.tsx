"use client";
import { useState, useEffect, useRef } from "react";
import { THEMES, DEFAULT_THEME, type ThemeId } from "@/app/data";
import ThemeOption from "@/app/components/molecules/ThemeOption";

export default function ThemeSwitcher() {
	const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const saved = localStorage.getItem("portfolio-theme") as ThemeId | null;
		if (saved && THEMES.some((t) => t.id === saved)) apply(saved);
	}, []);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node))
				setOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	function apply(id: ThemeId) {
		document.documentElement.setAttribute("data-theme", id);
		setTheme(id);
		localStorage.setItem("portfolio-theme", id);
	}

	return (
		<div className='theme-switcher' ref={ref}>
			<div className={`theme-palette${open ? " open" : ""}`}>
				<div className='palette-label'>// color_scheme</div>
				{THEMES.map((t) => (
					<ThemeOption
						key={t.id}
						id={t.id}
						label={t.label}
						swatch={t.swatch}
						active={theme === t.id}
						onSelect={(id) => {
							apply(id);
							setOpen(false);
						}}
					/>
				))}
			</div>
			<button className='theme-toggle-btn' onClick={() => setOpen((o) => !o)}>
				<span className='theme-dot' />
				set_theme()
			</button>
		</div>
	);
}
