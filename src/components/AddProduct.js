// import React from 'react';

// const AddProduct = () => {
//     const [name, setName] = React.useState('');
//     const [price, setPrice] = React.useState('');
//     const [category, setCategory] = React.useState('');
//     const [company, setCompnay] = React.useState('');


//     // const [error,setError] = React.useState(false);

//     const addProduct = async () => {

//         if(!name || !price || !company || !category)
//         {
//             // setError(true);
//             return false
//         }

//         const userId = JSON.parse(localStorage.getItem('user'))._id;
//         let result = await fetch("http://localhost:5000/add-product", {
//             method: "post",
//             body: JSON.stringify({ name, price, category, company, userId }),
//             headers: {
//                 "Content-type": "application/json"
//             }
//         });
//         result = await result.json();
//         console.warn(result)

//     }
   





//     return (
//         <div className='product'>
//             <h1>Add Product</h1>
//             <input type="text" placeholder='Enter product name' className='inputBox'
//                 value={name} onChange={(e) => { setName(e.target.value) }}
//             />
//             <input type="text" placeholder='Enter product price' className='inputBox'
//                 value={price} onChange={(e) => { setPrice(e.target.value) }}
//             />
//             <input type="text" placeholder='Enter product category' className='inputBox'
//                 value={category} onChange={(e) => { setCategory(e.target.value) }}
//             />
//             <input type="text" placeholder='Enter product company' className='inputBox'
//                 value={company} onChange={(e) => { setCompnay(e.target.value) }}
//             />
//             <button onClick={addProduct} className='appButton'>Add Product</button>
//         </div>
//     )
// }

// export default AddProduct;



import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');

    const addProduct = async () => {
        if (!name || !price || !company || !category) {
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "POST",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
    }

    return (
        <div className="container w-50">
            <h1 className="mb-4">Add Product</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
            </div>
            <button onClick={addProduct} className="btn btn-primary">
                Add Product
            </button>
        </div>
    );
}

export default AddProduct;
