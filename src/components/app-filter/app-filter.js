import "./app-filter.css";

const AppFilter = (props) => {
    const btnsData = [
        {name:'all', label:"Усі співробітники",colored:true},
        {name:'rise', label:"На підвищення",colored:false},
        {name:'moreThen1000', label:"ЗП більше 1000$",colored:false}
    ]
    const buttons = btnsData.map(({name,label,colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'coloractive' : 'btn-outline-light';
        const coloractive = colored ? {color: 'red'} : null
        return (<button
            key={name} 
            className={`btn ${clazz}`}
            type="button"
            onClick={() => props.onFilterSelect(name)}
            style={coloractive}>
                 {label}
            </button>
        )   
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;