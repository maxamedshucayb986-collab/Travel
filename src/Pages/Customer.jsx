import Customer1 from "../Component/Customer/Customer1"
import Customer2 from "../Component/Customer/Customer2"
import Customer3 from "../Component/Customer/Customer3"
import Customer4 from "../Component/Customer/Customer4"
import Customer5 from "../Component/Customer/Customer5"
// import Customer6 from "../Component/Customer/Customer6"



function Customer() {
    return(
        <div>
            <Customer1 />
            <Customer3 />
            <Customer4 />
            <Customer5 />
            {/* <Customer6 /> */}
            <Customer2 />

        </div>
    )
}


export default Customer