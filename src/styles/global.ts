import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #f0f2f5;
		--red: #E52E4D;
		--blue: #5429CC;

		--blue-light: #6933FF;

		--text-title: #363F5F;
		--text-body: #969CB3;

		--backgroud: #F0F2F5;
		--shape: #FFF;
	}

	* {
		margin:0;
		padding:0;
		outline:none;
		box-sizing: border-box;
	}

	// por padrão o tamanho da font vem com 16px "é um tamanho ideal para desktop";
	html {

		@media (max-width: 1080px) {
			font-size: 93.75% // 16px * 0.9375 = 15px
		}

		@media (max-width: 720px) {
			font-size: 87.5% // 16px * 0.875 = 14px
		}
	}

	//REM => 1REM = font-size 16px

	body {
		background: var(--backgroud);
		-webkit-font-smoothing: antialiased;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
