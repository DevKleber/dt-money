import { useEffect } from "react";
import { Container } from "./styles";

const api = "http://localhost:3000/api/transactions";

export function TransactionTable() {
	useEffect(() => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Desenvovimento de website.</td>
						<td>R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
					<tr>
						<td>Aluguel.</td>
						<td className="deposit">R$ 1.100,00</td>
						<td>Casa</td>
						<td>17/02/2021</td>
					</tr>
					<tr>
						<td>Desenvovimento de website.</td>
						<td className="withdraw">-R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}