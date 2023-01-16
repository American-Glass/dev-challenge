import './Card.css';

export default function Card({ cardName, list }) {
	const titleDict = {
		equipments: 'Equipamentos',
		materials: 'Produtos',
		purchaseOrders: 'Pedidos de compra',
		sales: 'Pedidos de venda',
		workforce: 'Mão de obra',
	};

	const idDict = {
		equipments: 'equipmentId',
		materials: 'materialId',
		purchaseOrders: 'purchaseOrderId',
		sales: 'salesOrderId',
		workforce: 'workforceId',
	};

	const nameId = {
		equipments: 'equipmentName',
		materials: 'materialName',
		purchaseOrders: 'materialName',
		sales: 'materialName',
		workforce: 'name',
	};

	return (
		<div className="card">
			<div className="card-header d-flex justify-content-between align-items-center">
				<h3>{titleDict[cardName]}</h3>
				<span>{list.length} itens encontrados</span>
			</div>
			<div className="card-body text-start p-0">
				<ul className="list-group list-group-flush">
					{list.length === 0 ? (
						<span className="no-content text-center p-2">
							Nenhum item encontrado
						</span>
					) : (
						list.map((eachItem) => (
							<li
								key={eachItem[idDict[cardName]]}
								className="list-group-item d-flex justify-content-between"
							>
								<span className="item-id" style={{ width: '70px' }}>
									{eachItem[idDict[cardName]]}
								</span>
								<span className="item-name flex-fill">
									{eachItem[nameId[cardName]]}
								</span>
								{eachItem?.quantity && (
									<span className="item-quantity">
										Qtd: {eachItem?.quantity}
									</span>
								)}
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
}
