import React from "react";

// import all components


// import all modules


// import all controller function


// import all data



function PageNotFound () {

    return (
        <>
            <div className="banner banner--pagenotfound--img">
                <div className="page--not--found">
                    <h4 className="error--no"> 404 Error </h4>
                    <h6 className="error--title"> Content not available </h6>
                </div>
            </div>
            <div className="error--details">
                <h6> Dear Users, </h6>
                <p>
                    This is a 404 error response.<br /> 
                    [Page not found ...] <br /> 
                    The page you requested is not found in the system. <br />
                        *** Content Not Available <br />
                        *** Content On Development <br />
                        *** Content Coming Soon
                </p>
            </div>
        </>
    );

}

export default PageNotFound;
