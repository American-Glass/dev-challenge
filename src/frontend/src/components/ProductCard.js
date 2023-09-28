import React from 'react';

function ProductCard({ data }) {
    const serializer = (item) => {
        const name = Object
          .keys(item)
          .find((key) => key
            .toLowerCase()
            .includes('name'));
        
        return name;
      }

    return(
    <>
        {Object.keys(data).map((products) => (
            <table key={products}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                </tr>
                </thead>
                <tbody>
                {data[products].length
                ? data[products].map((item) => (
                    <tr key={Object.values(item)[0]}>
                    <th>{Object.values(item)[0]}</th>
                    <th>{item[serializer(item)]}</th>
                    {item['Quantity'] && (
                        <th>
                        <span>Qtd: {item['Quantity']}</span>
                        </th>
                    )}
                    </tr>
                ))
                : (
                    <tr>
                    <th>Nenhum produto encontrado</th>
                    </tr>
                )}
                </tbody>
            </table>
        ))}
    </>
    );
}

export default ProductCard;