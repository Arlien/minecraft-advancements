import React from "react";
import {withStyles} from "@material-ui/core";
import AdvancementIcon from "./AdvancementIcon";
import Advancement from "./Advancement";

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

    state = {
        x: 0,
        y: 0,
        isGrabbing: false
    }

    constructor() {
        super();
        this.handleGrab = this.handleGrab.bind(this);
    }

    toggleGrab(value) {
        this.setState({
            ...this.state,
            isGrabbing: value
        });
    }

    handleGrab(e) {
        const {isGrabbing, x, y} = this.state;
        if (isGrabbing) {
            this.setState({
                ...this.state,
                x: x + e.movementX < 0 && x + e.movementX > -500 ? x + e.movementX : x,
                y: y + e.movementY < 0 && y + e.movementY > -500 ? y + e.movementY : y
            });
        }
    }


    render() {
        const {x, y, isGrabbing} = this.state;
        const {type, classes} = this.props;

        return (
            <div style={{
                cursor: isGrabbing ? 'grabbing' : 'grab',
                backgroundImage: `url("./assets/img/background/${type.image}")`,
                backgroundPosition: `${x}px ${y}px`
            }} className={classes.background}  onMouseMove={this.handleGrab} onMouseDown={()=>this.toggleGrab(true)} onMouseUp={()=>this.toggleGrab(false)}>
                {type.advancements?.length && type.advancements.map((advancement) => {
                    return (
                        <Advancement x={x} y={y} advancement={advancement}/>
                    );
                })}
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(AdvancementsPager);
