//   // export default function Basket() {
//   // return <div>

//   let output = document.querySelector('.productsInfo');

//   const fetchProducts = () => {
//   output.innerHTML = '';
//   fetch("http://localhost:8000/sql/products")
//   .then(res => res.json())
//   .then(data => {
    
// data.map(products => {
//   let product_image = product.product_image;
//   let product_name = product.product_name;
//   let product_author= product.product_author;
//   let product_sales_price = product.product_sales_price;
   
//         const DivElement = document.createElement("div")
//           DivElement.classList.add("container")    
        
//         const ProductsParams = document.createElement("div")
//           BookParams.classList.add("bookInfo")
//           BookParams.innerHTML = `productIMG: ${product_image}, productName ${product_name}, ProductAuthor: ${product_author}, productPrice: ${product_sales_price}`;
                
//         // const VehicleImg = document.createElement("h4")
//         // VehicleImg.classList.add("vehicle-img")
//         // VehicleImg.innerHTML = `Photo: <img class="auto-img" src="${img}">`;
        
//         output.append(DivElement);
//         DivElement.append(productParams);
//         // DivElement.append(VehicleImg);
  
//     })
// })

// fetchProducts();
//         const CreateBtn = document.getElementById("ProductRegistration")
//         CreateBtn.addEventListener('click', (event) => {
//           event.preventDefault();
//           const newImage = document.getElementById("productImg").value;   
//           const newName = document.getElementById("productName").value; 
//           const newAuthor = document.getElementById("productAuthor").value;
//           const newPrice = document.getElementById("productSalesPrice").value;
//           console.log(newImage);
//           console.log(newName);
//           console.log(newAuthor);
//           console.log(newPrice);
          
//           const newBook = {
//             product_image,
//             product_name, 
//             product_author,
//             product_sales_price,
          
//         fetchProducts(`http://localhost:3000/`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(newProduct)
//         }).then(() => {
//           fetchProduct();
//         })      
//     });
// // </div>;
// }

