

export default function SingleProduct({ product, handleSelectedProduct }) {
    const { id, name, image, price, description, isFeature } = product || {};

    return (
        <div className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
            <img className="w-full h-40 object-cover rounded-md" src={image} alt={name} />
            <h2 className="text-lg font-semibold mt-2">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="flex justify-between w-full mt-2 text-sm font-medium">
                <p>${price}</p>
                <p>{isFeature ? "Feature category" : "Not category"}</p>
            </div>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleSelectedProduct(product)}
            >
                Add to cart
            </button>
        </div>
    );
}

