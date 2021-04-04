import logoImg from "../../assets/logo.svg";
import { Container, Contant } from "./styles";

export function Header() {
	return (
		<Container>
			<Contant>
				<img src={logoImg} alt="dt money" />

				<button type="button">Nova transação</button>
			</Contant>
		</Container>
	);
}
