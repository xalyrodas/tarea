
function header(){
    let header=document.createElement('header');
    header.className="header";

    let logo = document.createElement('img');
    logo.src="https://static.vecteezy.com/system/resources/previews/018/931/537/original/cartoon-venus-icon-png.png";
    logo.alt="logo";


    let title = document.createElement('h1');
    title.textContent = "Lista";
    title.className = "title";

    header.appendChild(title);
    header.appendChild(logo);


    return header;
}
export{header}