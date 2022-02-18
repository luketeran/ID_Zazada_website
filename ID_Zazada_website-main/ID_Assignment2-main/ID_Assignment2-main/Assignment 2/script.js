const items = [
    "Gigabyte GeForce GTX 1660Ti OC 6GB Graphics Card", 
    "Secret Lab Lamp",
    "NF95 Mask",
    "Asus 32 Inch Monitor 400Hz refresh rate @ 8K",
    "Asus GeForce RIX 3090Ti 24GB GDDR6X",
    "Clorox Liquid Bleach - Original",
    "Apple AirPods max",
    "L'Oreal shampoo",
    "Apple Iphone14",
    "6ixt8ight Shirt",
    "Herschel Bag",
    "none"
]

const page =[
    "product-gpu.html",
    "product-lamp.html",
    "product-mask.html",
    "product-monitor.html",
    "product-gpu2.html",
    "product-bleach.html",
    "product-airpod.html",
    "product-shampoo.html",
    "product-iphone14.html",
    "product-tshirt.html",
    "product-backpack.html",
    "index.html"
]

function search(){
    var x = document.getElementById("input").value;
    console.log(x);
    let i = 0;
    while (i < items.length){
        if(x === items[i]){
            window.open(page[i],"_self");
        }
        i++;
    }
}

/* Contact Us Form Script */
function clicked() {
    return confirm('Sent!');
}