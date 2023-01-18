import React from "react";
import s from './Setting.module.css';
import Setting from "./Setting";
import { connect } from "react-redux";

const SettingContainer = () => {
    return (
        <Setting />
    )
}

const mapStateToProps = () => {

}

export default connect(mapStateToProps, {})(SettingContainer)