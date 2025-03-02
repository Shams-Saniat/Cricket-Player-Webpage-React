

export default function Available({ selectedProducts, handleDelete }) {
    return (
        <div className="p-6">
            {selectedProducts.length > 0 ? (
                <div className="space-y-4">
                    {selectedProducts.map((product) => (
                        <div key={product.id} className="flex items-center gap-4 border p-4 rounded-lg shadow-md bg-white">
                            <img className="w-16 h-16 object-cover rounded-md" src={product.image} alt={product.name} />
                            <div className="flex-1">
                                <p className="text-lg font-semibold">{product.name}</p>
                                <p className="text-blue-600">${product.price}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center">No selected products.</p>
            )}
        </div>
    );
}

