//import ProductList from "./ProductList";


const Nowlogin = () => {

    //function gotoproduct() {
        //navigate("/productlist");
    //}
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-3'>
                </div>
                <div className='col-6'>
                    <div className="header">
                    <div className="text">Login</div>
                        <div className="inputs">
                            <div className='row'>
                                <div className='col-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-check" viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                    </svg>
                                </div>
                                <div className='col-10'>
                                <input type="text" placeholder="Enter name">
                                </input>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                </div>
                                <div className='col-10'>
                                    <input type="text" placeholder="Enter password">
                                    </input>
                                </div>
                                <div className='row'></div>
                                <div className="container">
                                    <div className='row'>
                                        <div className='col-4'>
                                        </div>
                                        <div className='col-4'>
                                            <button type="button" className='btn btn-dark'>Login</button>
                                        </div>
                                        <div className='col-4'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div className='col-3'>
                </div>
            </div>
        </div>
    )
}
export default Nowlogin;