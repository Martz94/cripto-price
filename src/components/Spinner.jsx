import React from "react";
import '../styles/Spinner.css'
import styled from "@emotion/styled";

const Spin = styled.div`
    margin-top: 15px;
`

const Spinner = () => {
    return (
        <>
            <Spin className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </Spin>
        </>
    )
}

export default Spinner