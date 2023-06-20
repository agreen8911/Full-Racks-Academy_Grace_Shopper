import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "./editProductSlice"
import {
	fetchSingleProduct,
	selectProduct,
	editProduct,
} from "./editProductSlice";


const EditProduct = () => {
	const dispatch = useDispatch();
	const product = useSelector(selectProduct);
	const navigate = useNavigate();
	const { id } = useParams();

	const [productName, setProductName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [productType, setProductType] = useState("");


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			editProduct({
				id,
				productName,
				price,
				description,
				imageUrl,
				productType,
			})
		);
		dispatch(fetchSingleProduct(id));
     	setProductName("");
		setPrice("");		
		setDescription("");
     	setImageUrl("");
     	setProductType("");

		navigate("/adminview")
	};
	//
	const handleDelete = () => {
		dispatch(deleteProduct(id));
		navigate("/adminview");
	};

	return (
		<div id="editProductWrapper">
			<div className="editProductContainer">
				<li key={id}>
					<h2 id="editProductHeader"> Edit Product Info Below</h2>
				</li>

				<form id="product-form" onSubmit={handleSubmit}>

					<label htmlFor="productName">Product Name:</label>
					<input
						name="productName" 
						value={productName}
						placeholder="Enter Product Name"
						onChange={(e) => setProductName(e.target.value)}
					/>

					<label htmlFor="price">Price:</label>
					<input
						name="price" 
						value={price}
						placeholder="Enter Price of Product"
						onChange={(e) => setPrice(e.target.value)}
					/>

					<label htmlFor="description">Description:</label>
					<input
						name="description" 
						value={description}
						placeholder="Enter Description of Product"
						onChange={(e) => setDescription(e.target.value)}
					/>

					<label htmlFor="imageUrl">Image URL:</label>
					<input
						name="imageUrl"
						value={imageUrl}
						placeholder="Enter Image URL"
						onChange={(e) => setImageUrl(e.target.value)}
					/>

					<label htmlFor="productType">Product Type:</label>
					<input
						name="productType"
						value={productType}
						placeholder="Enter Product Type"
						onChange={(e) => setProductType(e.target.value)}
					/>

					<div className="button-box">
						<button className="submitBtn" type="submit">Submit Changes</button>

						<Link to="/adminview">
							<button className="cancelBtn">Cancel</button>
						</Link>

						<div>
							<button className="deleteBtn" onClick={handleDelete}>Delete</button>
						</div>
						
					</div>
				</form>
			</div>
		</div>	
	);
};

export default EditProduct;
