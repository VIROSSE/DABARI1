import { cn } from "../../../../lib/utils";

export default function AnnualReturnIcon({
	className,
}: {
	className?: string;
}) {
	return (
		<svg
			width="45"
			height="39"
			viewBox="0 0 45 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("w-[45px] h-[39px] fill-[#BBBFC6]", className)}
		>
			<path d="M3.03906 29.9945V37.2606C3.03906 37.7027 3.39822 38.0711 3.84948 38.0711H9.46712C9.90916 38.0711 10.2775 37.7119 10.2775 37.2606V24.4782L6.19784 28.5579C5.33217 29.4144 4.22706 29.9117 3.03906 29.9945Z" />
			<path d="M13.0771 24.3861V37.2606C13.0771 37.7027 13.4363 38.071 13.8876 38.071H19.5052C19.9472 38.071 20.3156 37.7119 20.3156 37.2606V29.6814C19.0355 29.6538 17.8383 29.1473 16.9358 28.2448L13.0771 24.3861Z" />
			<path d="M23.1152 28.8802V37.2606C23.1152 37.7027 23.4744 38.071 23.9256 38.071H29.5433C29.9853 38.071 30.3537 37.7119 30.3537 37.2606V21.7983L23.9164 28.2356C23.6678 28.4842 23.4007 28.696 23.1152 28.8802Z" />
			<path d="M39.8484 12.2943L33.1533 18.9895V37.2606C33.1533 37.7027 33.5125 38.071 33.9637 38.071H39.5814C40.0234 38.071 40.3918 37.7119 40.3918 37.2606V12.8009C40.2076 12.6443 40.0695 12.5062 39.9682 12.4141L39.8484 12.2943Z" />
			<path d="M44.4438 0.432835C44.1768 0.147348 43.7716 0 43.2559 0C43.2098 0 43.1545 0 43.1085 0C40.4931 0.11972 37.8869 0.24865 35.2714 0.36837C34.9215 0.386789 34.4426 0.405207 34.065 0.782786C33.9453 0.902507 33.8532 1.04065 33.7795 1.20641C33.3927 2.04445 33.9361 2.5878 34.1939 2.84566L34.8478 3.50872C35.2991 3.96919 35.7595 4.42965 36.22 4.8809L20.4169 20.6932L13.3166 13.5929C12.893 13.1692 12.322 12.9298 11.7142 12.9298C11.1064 12.9298 10.5446 13.1692 10.121 13.5929L0.663066 23.0415C-0.221022 23.9256 -0.221022 25.3531 0.663066 26.2372L1.08669 26.6608C1.51032 27.0844 2.08129 27.3238 2.6891 27.3238C3.29691 27.3238 3.85868 27.0844 4.2823 26.6608L11.7142 19.2289L18.8145 26.3293C19.2381 26.7529 19.8091 26.9923 20.4169 26.9923C21.0247 26.9923 21.5865 26.7529 22.0193 26.3293L39.8484 8.50014L41.8653 10.5078C42.1047 10.7472 42.4362 11.0787 42.9427 11.0787C43.1545 11.0787 43.3664 11.0235 43.5874 10.9038C43.7347 10.8209 43.8637 10.7288 43.9742 10.6183C44.3702 10.2223 44.4438 9.71576 44.4623 9.31976C44.5359 7.62526 44.6188 5.93076 44.7017 4.22705L44.8214 1.67608C44.8491 1.14195 44.7293 0.727531 44.4438 0.432835Z" />
		</svg>
	);
}