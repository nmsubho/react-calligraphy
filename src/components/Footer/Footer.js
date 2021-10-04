import React from 'react';

const Footer = () => {
    return (
        <div className="position-absolute start-0 bottom-0 w-100 alert-dange">
            <div>

                <footer className="bg-dark text-center text-lg-start text-white">
                    <div className="container px-4 py-2">
                        <div className="row mt-4">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">See other books</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Bestsellers</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">All books</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Execution of the contract</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Supply</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Returns</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Publishing house</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">The BookStore</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">123 Street</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Write to us</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Help in purchasing</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Check the order status</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-3">
                        © 2021 Copyright:
                        <a className="text-white text-decoration-none" href="https://github.com/nmso2"> MD. Nagib Mahfuz Subho</a>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Footer;