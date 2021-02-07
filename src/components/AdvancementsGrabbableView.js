import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    background: {
        position: "relative",
        left: "2.5%",
        top: "2.5%",
        width: "95%",
        height: "95%",
        backgroundSize: 40
    },
});

class AdvancementsPager extends React.Component {
    render() {
        const {x, y, type, classes} = this.props;

        return (
            <div style={{
                backgroundImage: `url("./assets/img/background/${type.image}")`,
                backgroundPosition: `${x}px ${y}px`
            }} className={classes.background}>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(AdvancementsPager);
