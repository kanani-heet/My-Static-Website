// ================= PRODUCTS =================

const products = [
	{
		name:"Classic T-Shirt",
		price:25,
		category:"Men",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkBs0akq2CyQIFDZ3C8Uh_CUV0pgKnq4K9N9BOB8DrPzTiMzV0zBNZpM&s=10"
	},
	{
		name:"Denim Jacket",
		price:60,
		category:"Men",
		image:"https://d1pdzcnm6xgxlz.cloudfront.net/tops/8905074718467-18.jpg"
	},
	{
		name:"Hoodie",
		price:40,
		category:"Men",
		image:"https://www.mydesignation.com/cdn/shop/files/lava-hoodie-hoodie-mydesignation-2443644.jpg?v=1764389591"
	},
	{
		name:"Summer Dress",
		price:55,
		category:"Women",
		image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
	},
	{
		name:"Casual Shirt",
		price:35,
		category:"Men",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFfsmSjC1nCdHTQPsNmVnLCm4OlXZHJUkjWITZZmItpMm11x21iZy1h9R&s=10"
	},
	{
		name:"Jeans",
		price:45,
		category:"Men",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrA4FtEKmsVvVJb-4-WVHcywoddjgfekTLFL6nysUHw&s"
	},
	{
		name:"Sneakers",
		price:70,
		category:"Men",
		image:"https://images.meesho.com/images/products/1007443738/ylwb5_512.webp?width=512"
	},
	{
		name:"Leather Jacket",
		price:120,
		category:"Men",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpU6m0XyxuiR93VC2BNHCx7sIoLSwTjycZjV2o_s-o-BiBtOv_gnKUPJVR&s=10"
	},
	{
		name:"Kurti",
		price:30,
		category:"Women",
		image:"https://cdn.shopify.com/s/files/1/0044/8033/5936/files/black-cotton-aari-work-kurti-multicoloured-neckline-embroider-kurtis-851.jpg"
	},
	{
		name:"Blazer",
		price:90,
		category:"Men",
		image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzz3L5zbUScgHKoe7mRyq5VFRzavg2tv28ceaLyoNywYLUxaMvKxXCzfq&s=10"
	}
];

const container=document.getElementById("productContainer");
const cartItems=document.getElementById("cartItems");
const totalPrice=document.getElementById("totalPrice");

let cart=[];
let wishlist=[];

// ================= DISPLAY =================

function display(data){

	container.innerHTML="";

	data.forEach((p,index)=>{

		container.innerHTML+=`

<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<div class="card-buttons">

<button onclick="addCart(${index})">

Add Cart

</button>

<button onclick="wishlistItem(${index})">

❤

</button>

</div>

</div>

		`;

	});

}

display(products);

// ================= SEARCH =================

document.getElementById("search").addEventListener("keyup",()=>{

	let text=document.getElementById("search").value.toLowerCase();

	let result=products.filter(x=>x.name.toLowerCase().includes(text));

	display(result);

});

// ================= FILTER =================

document.getElementById("filter").addEventListener("change",()=>{

	let value=document.getElementById("filter").value;

	if(value=="all"){

		display(products);

	}else{

		display(products.filter(x=>x.category==value));

	}

});

// ================= SORT =================

document.getElementById("sort").addEventListener("change",()=>{

	let value=document.getElementById("sort").value;

	let arr=[...products];

	if(value=="low"){

		arr.sort((a,b)=>a.price-b.price);

	}

	if(value=="high"){

		arr.sort((a,b)=>b.price-a.price);

	}

	display(arr);

});

// ================= CART =================

function addCart(index){

	cart.push(products[index]);

	document.getElementById("cartCount").innerHTML=cart.length;

	showCart();

}

function showCart(){

	cartItems.innerHTML="";

	let total=0;

	cart.forEach((item,i)=>{

		total+=item.price;

		cartItems.innerHTML+=`

<p>

			${item.name}

-

$${item.price}

<button onclick="removeItem(${i})">

❌

</button>

</p>

		`;

	});

	totalPrice.innerHTML=total;

}

// ================= REMOVE =================

function removeItem(i){

	cart.splice(i,1);

	document.getElementById("cartCount").innerHTML=cart.length;

	showCart();

}

// ================= WISHLIST =================

function wishlistItem(index){

	wishlist.push(products[index]);

	document.getElementById("wishCount").innerHTML=wishlist.length;

	alert("Added to Wishlist");

}

// ================= CART PANEL =================

document.getElementById("cartBtn").onclick=()=>{

	document.getElementById("cartPanel").style.right="0";

}

document.getElementById("closeCart").onclick=()=>{

	document.getElementById("cartPanel").style.right="-420px";

}

// ================= THEME =================

document.getElementById("themeBtn").onclick=()=>{

	document.body.classList.toggle("dark");

}

// ================= CHECKOUT =================

document.getElementById("checkoutBtn").onclick=()=>{

	if(cart.length==0){

		alert("Cart Empty");

		return;

	}

	document.getElementById("paymentPopup").style.display="flex";

	document.getElementById("payPrice").innerHTML="Total : $"+totalPrice.innerHTML;

}

// ================= CLOSE PAYMENT =================

document.getElementById("closePopup").onclick=()=>{

	document.getElementById("paymentPopup").style.display="none";

}

// ================= PAYMENT =================

document.getElementById("payNow").onclick=()=>{

	let name=document.getElementById("customer").value;

	let card=document.getElementById("card").value;

	let cvv=document.getElementById("cvv").value;

	if(name==""||card.length!=16||cvv.length!=3){

		alert("Enter Valid Details");

		return;

	}

	alert("Payment Successful");

	cart=[];

	showCart();

	document.getElementById("cartCount").innerHTML=0;

	document.getElementById("paymentPopup").style.display="none";

}

// ================= CONTACT =================

document.getElementById("contactForm").onsubmit=function(e){

	e.preventDefault();

	alert("Message Sent Successfully");

	this.reset();

}

// ================= YEAR =================

document.getElementById("year").innerHTML=new Date().getFullYear();

// ================= LOADER =================

window.onload=function(){

	document.getElementById("loader").style.display="none";

}

// ================= BACK TO TOP =================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

	topBtn.style.display=window.scrollY>300?"block":"none";

}

topBtn.onclick=function(){

	window.scrollTo({

		top:0,

		behavior:"smooth"

	});

}