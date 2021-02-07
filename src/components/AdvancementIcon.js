import React from "react";
import {withStyles} from "@material-ui/core";
import {ADVANCEMENT_ICON_SIZE, ADVANCEMENT_MARGIN_SIZE, ADVANCEMENT_SIZE} from "../config";

const styles = theme => ({
    background: {
        position: "relative",
        left: "2.5%",
        top: "2.5%",
        width: "95%",
        height: "95%",
        backgroundSize: 40
    },
    advancement_plain: {
        position: "relative",
        width: `${ADVANCEMENT_SIZE}px`,
        height: `${ADVANCEMENT_SIZE}px`,
        backgroundSize: ADVANCEMENT_SIZE,
        display: "flex",
    },
    advancement_icon: {
        margin: "auto",
        width: `${ADVANCEMENT_ICON_SIZE}px`,
        height: `${ADVANCEMENT_ICON_SIZE}px`,
        backgroundSize: ADVANCEMENT_ICON_SIZE,
    }
});

class AdvancementIcon extends React.Component {

    render() {
        const {classes, advancement, selected} = this.props;

        return (
            <div className={classes.advancement_plain}
                 style={{
                     zIndex: selected ? 5 : 2,
                     backgroundImage: `url("./assets/img/advancements/icon/advancement-plain-${advancement.achieved ? 'worn' : 'raw'}.png")`,
                 }}>
                <div className={classes.advancement_icon}
                     style={{
                         zIndex: selected ? 5 : 2,
                         backgroundImage: `url("./assets/img/icons/${advancement.logo}")`,
                     }}>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(AdvancementIcon);