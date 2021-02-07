import React from "react";
import {withStyles} from "@material-ui/core";
import AdvancementsPager from "./AdvancementsPager";
import AdvancementsGrabbableView from "./AdvancementsGrabbableView";

const styles = theme => ({
    root: {
        width: "1008px",
        height: "560px",
        margin: "auto",
    },
    frame: {
        width: "inherit",
        height: "inherit",
        position: "absolute",
        zIndex: 2,
        backgroundImage: `url("./assets/img/window.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1008px",
    },
    background: {
        position: "relative",
        left: "2.5%",
        top: "2.5%",
        width: "95%",
        height: "95%",
        backgroundSize: 40
    },
    pagerContainer: {
        display: "flex",
        flexDirection: "row",
    },
    windowTitle: {
        marginTop: "18px",
        marginLeft: "35px",
        fontSize: "36px",
        fontFamily: "Minecraft",
        color: "#3F3F3F",
        userSelect: "none"
    }
});

const AdvancementsWindowTypes = {
    MINECRAFT: {
        image: "stone.png",
        logo: "grass.png",
        advancements: {
            0: {
                title: "Minecraft",
                description: "The heart and story of the game",
                parent: null,
                logo: "grass.png"
            },
            1: {
                title: "Stone age",
                description: "Mine stone with your new pickaxe",
                parent: 0,
                logo: "wooden_pickaxe.png"
            },
        }
    },
    ADVENTURE: {
        image: "adventure.png",
        logo: "map.png"
    },
    NETHER: {
        image: "nether.png",
        logo: "nether.png"
    },
    END: {
        image: "end.png",
        logo: "end.png"
    },
    HUSBANDRY: {
        image: "husbandry.png",
        logo: "hay_bale.png"
    }
}

class AdvancementsWindow extends React.Component {

    state = {
        advancementsType: AdvancementsWindowTypes.MINECRAFT,
        x: 0,
        y: 0,
        isGrabbing: false
    }

    constructor() {
        super();
        this.handleChangeAdvanementsType = this.handleChangeAdvanementsType.bind(this);
        this.handleGrab = this.handleGrab.bind(this);
    }

    handleChangeAdvanementsType(type) {
        this.setState({
            ...this.state,
            advancementsType: type,
            x: 0,
            y: 0,
        })
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
        const {advancementsType, x, y, isGrabbing} = this.state;
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.pagerContainer}>
                    {Object.values(AdvancementsWindowTypes).map((advancementsWindowType,idx) => {
                        return (
                            <AdvancementsPager key={"pannel-"+idx} id={idx} onClick={this.handleChangeAdvanementsType} type={advancementsWindowType} opened={advancementsWindowType === advancementsType}/>
                        )
                    })}
                </div>
                <div style={{
                    cursor: isGrabbing ? 'grabbing' : 'grab'
                }}
                    className={classes.frame} onMouseMove={this.handleGrab} onMouseDown={()=>this.toggleGrab(true)} onMouseUp={()=>this.toggleGrab(false)}>
                    <div className={classes.windowTitle}>
                        Advancements
                    </div>
                </div>
                <AdvancementsGrabbableView x={x} y={y} type={advancementsType}/>
            </div>
        )
    }

}

export default withStyles(styles, {withTheme: true})(AdvancementsWindow);