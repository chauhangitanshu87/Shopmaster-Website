import React from 'react';

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompnay] = React.useState('');

    const updateProduct = async () => {
        console.warn(name,price,category,company)
    }

    return (
        <div className="container w-50">
        <div className="card p-4 shadow-lg">
            <h1 className="text-center mb-4">Update Product</h1>
            
            <div className="form-group mb-3">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input 
                    type="text" 
                    id="productName" 
                    placeholder="Enter product name" 
                    className="form-control"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
    
            <div className="form-group mb-3">
                <label htmlFor="productPrice" className="form-label">Product Price</label>
                <input 
                    type="text" 
                    id="productPrice" 
                    placeholder="Enter product price" 
                    className="form-control"
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
            </div>
    
            <div className="form-group mb-3">
                <label htmlFor="productCategory" className="form-label">Product Category</label>
                <input 
                    type="text" 
                    id="productCategory" 
                    placeholder="Enter product category" 
                    className="form-control"
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                />
            </div>
    
            <div className="form-group mb-4">
                <label htmlFor="productCompany" className="form-label">Product Company</label>
                <input 
                    type="text" 
                    id="productCompany" 
                    placeholder="Enter product company" 
                    className="form-control"
                    value={company} 
                    onChange={(e) => setCompnay(e.target.value)} 
                />
            </div>
    
            <button onClick={updateProduct} className="btn btn-primary btn-block">
                Update Product
            </button>
        </div>
    </div>
    
    )
}

export default UpdateProduct;