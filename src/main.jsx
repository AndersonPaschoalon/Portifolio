
ReactDOM.render
(
    <div id="page-container">
        <NavbarLeft1 title="Anderson Paschoalon" menu= {[
            {label:"Abacaxi", show:true,  content:"www.google.com"},
            {label:"Banana", show:true, content:"https://br.yahoo.com"},
            {label:"Carambola", show:true, content:"https://www.oantagonista.com/"},
            {label:"Damasco", show:false, content:"https://www.sublimetext.com/"} ,
            {label:"Universidades", show:true, content:[
                {label:"Usp", show:false, content:"https://www5.usp.br"},
                {label:"Unicamp", show:true, content:"https://www.unicamp.br/unicamp/"},
                {label:"Unesp", show:true, content:"https://www2.unesp.br/"}
            ]}, 
            {label:"Espinafre", show:true, content:"https://www.sublimetext.com/"}
        ]} /> 
    </div>,
    document.getElementById("root")
)


