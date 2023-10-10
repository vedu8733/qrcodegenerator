let form = document.querySelector(".form");

let submitdata = document.querySelector(".submitdata");
let main = document.querySelector(".main");

submitdata.addEventListener("click",(e)=>{
    let inputdata = document.querySelector(".inputdata").value
    // let searchdata =  inputdata.value;
    console.log(inputdata)
    let image = document.createElement("img");
    image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + inputdata;
    main.appendChild(image);
})

