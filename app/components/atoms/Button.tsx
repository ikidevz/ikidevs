type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: ButtonVariant;
	href: string;
}

export default function Button({
	variant = "primary",
	href,
	children,
	...props
}: ButtonProps) {
	return (
		<a
			href={href}
			className={variant === "primary" ? "btn-primary" : "btn-ghost"}
			{...props}>
			{children}
		</a>
	);
}
