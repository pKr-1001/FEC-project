import TestHeader from "./TestHeader";
import TestMain from "./TestMain";

function TestHome(){
    return (
        <>
            <h3>this is the Homepage component, contains TestHeader and TestMain components</h3>
            <TestHeader />
            <TestMain />
        </>
    )
}

export default TestHome;