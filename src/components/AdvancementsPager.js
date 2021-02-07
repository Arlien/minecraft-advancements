import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    tab: {
        width: "112px",
        height: "128px",
        position: "relative",
        backgroundSize: "112px",
        backgroundRepeat: "no-repeat",
        marginRight: "15px"
    },
    logo: {
        marginTop: "25px",
        width: 50,
        margin: "auto",
        display: "block"
    }
});

class AdvancementsPager extends React.Component {

    render() {
        const {classes, id, opened, onClick, type} = this.props;
        return (
            <>
                <div className={classes.tab}
                     onClick={()=>onClick(type)}
                     style={{
                    top: opened ? "16px" : "32px",
                    zIndex: opened ? 3 : 1,
                    backgroundImage: `url("./assets/img/advancements/window/${opened ? 'opened' : 'closed'}-tab-${id === 0 ? 'first' : 'generic'}.png")`,}}>
                    <img className={classes.logo} src={`./assets/img/icons/${type.logo}`}/>
                </div>
            </>
        )
    }
}

export default withStyles(styles, {withTheme: true})(AdvancementsPager);
