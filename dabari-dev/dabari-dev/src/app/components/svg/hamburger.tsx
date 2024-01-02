import { cn } from "../../../../lib/utils";

export default function Hamburger({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 25 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("w-[25px] h-[22px] fill-[#BBBFC6]", className)}
		>
			<path d="M22 0H2.35714C1.06071 0 0 1.06071 0 2.35714C0 3.65357 1.06071 4.71429 2.35714 4.71429H22C23.2964 4.71429 24.3571 3.65357 24.3571 2.35714C24.3571 1.06071 23.2964 0 22 0Z" />
			<path d="M22 8.64285H2.35714C1.06071 8.64285 0 9.70357 0 11C0 12.2964 1.06071 13.3571 2.35714 13.3571H22C23.2964 13.3571 24.3571 12.2964 24.3571 11C24.3571 9.70357 23.2964 8.64285 22 8.64285Z" />
			<path d="M22 17.2857H2.35714C1.06071 17.2857 0 18.3464 0 19.6428C0 20.9393 1.06071 22 2.35714 22H22C23.2964 22 24.3571 20.9393 24.3571 19.6428C24.3571 18.3464 23.2964 17.2857 22 17.2857Z" />
		</svg>
	);
}