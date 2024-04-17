const Filter = ({Filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                <p>Status</p>
                <select value={Filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="ALL">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="InComplete">Incompletas</option>
                </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("Asc")}>ASC</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    );
};
               
        
export default Filter;
