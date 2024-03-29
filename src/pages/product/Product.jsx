import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title={"Sales Performance"}/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://lespritnomade.fr/wp-content/uploads/2016/09/airpods-pro.jpg" alt="" className="productInfoImage" />
                        <span className="productName">Apple Airpots</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" className="" placeholder="Apple Airpod"/>
                        <label htmlFor="">In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="idActive">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://lespritnomade.fr/wp-content/uploads/2016/09/airpods-pro.jpg" alt="" className="productUploadImage" />
                            <label htmlFor="file">
                                {/* <Publish /> */}
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productUploadButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
