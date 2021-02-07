import React from "react";
import {withStyles} from "@material-ui/core";
import AdvancementsWindow from "../components/AdvancementsWindow";

const styles = theme => ({
    background: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
});


class HomePage extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.background}>
                <AdvancementsWindow/>
            </div>
        )
    }

}

export default withStyles(styles, {withTheme: true})(HomePage);
