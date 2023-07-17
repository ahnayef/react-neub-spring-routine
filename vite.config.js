import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin= {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
	manifest: {
		name: "Routine",
		short_name: "Spring 23",
		description: "Spring23 routine app",
		icons: [
			{
				src: "src/assets/img/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "src/assets/img/mask-icon.svg",
				sizes: "144x65",
				type: "image/svg",
				purpose: "any maskable",
			},
			{
				src: "src/assets/img/cr.jpg",
				sizes: "457x450",
				type: "image/jpg"
			},
		],
		theme_color: "#1e1e1e",
		background_color: "#1e1e1e",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};
// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react(), VitePWA(manifestForPlugin)],
});