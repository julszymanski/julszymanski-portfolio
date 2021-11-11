import { connect } from "react-redux"
import MyProjects from "../components/MyProjects"

const mapStateToProps = (state) =>{
    return {
        counterValue:state.r1.counterValue,
        counterValue1:state.r2.counterValue1,
        counterValue2:state.r3.counterValue2

    }
}

function incrementFunction(){
    return {
        type: 'LIKED'
    }
}

function incrementFunction1(){
    return {
        type: 'LIKED1'
    }
}

function incrementFunction2(){
    return {
        type: 'LIKED2'
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        incrementValue: ()=> dispatch(incrementFunction()),
        incrementValue1: ()=> dispatch(incrementFunction1()),
        incrementValue2: ()=> dispatch(incrementFunction2()),        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (MyProjects);
