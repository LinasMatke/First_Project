import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Product () {
 const navigate = useNavigate();
 const [product_barcode, setProduct_Barcode] = useState('');
 const [product_name, setProduct_Name] = useState('');
 const [product_VAT, setProduct_VAT] = useState('');
 const [product_purchase_prise, setProduct_purchase_prise] = useState('');
 const [product_sales_prise, setProduct_sales_prise] = useState('');
 const [product_description, setProduct_description] = useState('');
 const [product_image, setProduct_image] = useState('');
 const [product_author, setProduct_author] = useState('');
 const [product_genre, setProduct_genre] = useState('');
 const [publisher, setPublisher] = useState('');
 const [pages, setPages] = useState('');
 const [language, setLanguage] = useState('');
 const [translator, setTranslator] = useState('');
 const [year, setYear] = useState('');

const handleProductRegistration = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/sql/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_barcode: product_barcode,
                product_name: product_name,
                product_VAT: product_VAT,
                product_purchase_prise: product_purchase_prise,
                product_sales_prise: product_sales_prise,
                product_description: product_description,
                product_image: product_image,
                product_author: product_author,
                product_genre: product_genre,
                publisher: publisher,
                pages: pages,
                language: language,
                translator: translator,
                year: year,
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error.false) {
                console.log('data')
                navigate('/shop');
            }
            if (data.error.true) {
             <inputError className="text">User data or password were wrong</inputError>   
            }
        });
    }
    return (
<div>
        <header className="headerRegistration">
            <div className="headerData">
                <img src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png" alt="bookHouse" className="headerImg"/>
                <h1 className="headerTitle">Product registration form</h1>
            </div>
        </header>       
        <div className="loginas" id="loginData">
    	    <div id="myForm" className="userDataForm">
                <div id="error-box"></div>
                    <div>
                        <label className="loginas0">Fill products registration data</label>
                    </div>
                        <div className="registrationData">  
                    <input type="text" placeholder="Product Barcode" id="Barcode" className="usdata" name="product_barcode"
                    onChange={(event, element) => {setProduct_Barcode(event.target.value)}}/>
                    <input type="text" placeholder="Product name" id="name" className="usdata" name="name"
                    onChange={(event, element) => {setProduct_Name(event.target.value)}}/>
                    <input type="text" placeholder="Product VAT" id="product_VAT" className="usdata" name="product_VAT"
                    onChange={(event, element) => {setProduct_VAT(event.target.value)}}/>
                    <input type="text" placeholder="Product purchase prise" id="purshase_prise" className="usdata" name="purchase_prise"
                    onChange={(event, element) => {setProduct_purchase_prise(event.target.value)}}/>
                    <input type="text" placeholder="Product sales prise" id="sales_prise" className="usdata" name="sales_prise"
                    onChange={(event, element) => {setProduct_sales_prise(event.target.value)}}/>
                    <input type="text" placeholder="Product description" id="product_description" className="usdata" name="product_description"
                    onChange={(event, element) => {setProduct_description(event.target.value)}}/>
                    <input type="href" placeholder="Product image URL" id="product_image" className="usdata" name="product_image"
                    onChange={(event, element) => {setProduct_image(event.target.value)}}/>
                    <input type="text" placeholder="Product author:" id="product_author" className="usdata" name="product_author"
                    onChange={(event, element) => {setProduct_author(event.target.value)}}/>
                    <input type="text" placeholder="Product genre" id="product_genre" className="usdata" name="product_genre"
                    onChange={(event, element) => { setProduct_genre(event.target.value)}}/>
                    <input type="text" placeholder="Product publisher" id="publisher" className="usdata" name="publisher"
                    onChange={(event, element) => { setPublisher(event.target.value)}}/>
                    <input type="text" placeholder="Pages" id="pages" className="usdata" name="pages"
                    onChange={(event, element) => { setPages(event.target.value)}}/>
                    <input type="text" placeholder="Language" id="language" className="usdata" name="language"
                    onChange={(event, element) => { setLanguage(event.target.value)}}/>
                    <input type="text" placeholder="Translator" id="translator" className="usdata" name="translator"
                    onChange={(event, element) => { setTranslator(event.target.value)}}/>
                    <input type="text" placeholder="Product release year" id="year" className="usdata" name="year"
                    onChange={(event, element) => { setYear(event.target.value)}}/>
                </div>
                        <div>
                            <input className="button-primary" type="submit" value="Register"
                                onClick={ (e) => {
                                handleProductRegistration(e)
                                navigate('/');
                            } }/>
                        </div>   
        
                    <div>
                            <p className="loginParachraf">Or perhaps, just login? <a href="http://127.0.0.1:3000/login">Login</a></p>
                    </div>
            </div>
        </div>         
        
        <footer className="footerRegistration">
            <div className="footerReg">
                     <p> © 2023 UAB „House of Books“. Visos teisės saugomos. _1 v1.10 </p>
            </div>
      </footer>      
            
    </div>

)
}