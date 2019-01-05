import React from "react";
import ReactDOM from "react-dom";
import BlameForm from "./BlameForm"
import {PageHeader} from "react-bootstrap"

const Index = () => {
    return <div>
        <PageHeader>What should Trump blame the Democrats for?</PageHeader>
        <BlameForm/>
    </div>;
};

ReactDOM.render(<Index/>, document.getElementById("index"));