import Table from '../components/Table'

const MainView = (props) => {
    
    return (  
        <div>
            <Table
                deleteJob={props.deleteJob} 
                listas={props.listas}
                msg={['Puesto','Empresa','Ciudad','País']}
            /> 
        </div>
    );
}
 
export default MainView;

