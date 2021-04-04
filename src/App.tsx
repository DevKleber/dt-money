import { useState } from "react";
import Modal from "react-modal"; //importando modal.
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root"); //mostrando qual tag será bloqueada.

export function App() {
	//controlando estado do modal. Aberto ou fechado.
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
		false
	);

	//função responsável por abrir o modal.
	function handleOpenNewTransactoinModal() {
		setIsNewTransactionModalOpen(true);
	}
	//função responsável por fechar o modal.
	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<>
			{/* esse modal será controlado no header. 
			então tenho que passar como prop a função resposavel por abrir o modal.  */}
			<Header onOpenNewTransactionModal={handleOpenNewTransactoinModal} />
			<Dashboard />

			<Modal
				//informando se o modal está aberto ou fechado.
				isOpen={isNewTransactionModalOpen}
				//passando função responsavel por fechar o modal.
				onRequestClose={handleCloseNewTransactionModal}
			>
				<h2>Cadastrar Transação</h2>
			</Modal>

			<GlobalStyle />
		</>
	);
}
