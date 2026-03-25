function Menu({canviarTasca}) {
    const menuItems = ['tasca 1', "tasca 2", "tasca 3", "tasca 4", "tasca 2.1", "tasca 2.2", "tasca_props"]
    function onClickMenuItem (item) {
        canviarTasca(item)
    }

return (
    <div style={{position: "absolute", top: 20, marginBottom: "20px", justifyContent: "center", display: "flex", gap: "10px",right: 0, left: 0}}>
        {menuItems.map((item) =>{
            return<button key={item} onClick={() => onClickMenuItem(item)}>{item} </button>               
        })}
    </div>
    )
}

export default Menu