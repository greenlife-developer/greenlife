import React from "react";
import SEO from "../SEO";
import {Link} from "react-router-dom"


export default function Home(){
    return(
        <>
        <SEO
        title="GNLife Tech Network"
        description="GNLife Tech Network has professionals in various major tech fields who can mentor new talents"
        name="GNLife Tech Network"
        type="landing page"
      />
          <h3>Coming soon...</h3>
          <h6> <Link to="/students" >student's page</Link> </h6>
        </>
    )
}