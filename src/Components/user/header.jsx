import "./style.css"

export default function Header(){
    
    return(
        <div>
            <h1>All Customers</h1>
            <div id="wrapper">
                <p>Customer Name</p>
                <p>Company</p>
                <p>Phone Number</p>
                <p>Email</p>
                <p>Street</p>
            </div>
            <div className="userData">
                <p>Jane Cooper</p>
                <p>Microsoft</p>
                <p>599 555-0118</p>
                <p>jane@microsoft.com</p>
                <p>ulas Light</p>
            </div>
        </div>
    )
}