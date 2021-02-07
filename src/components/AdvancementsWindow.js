import React from "react";
import {withStyles} from "@material-ui/core";
import AdvancementsPager from "./AdvancementsPager";
import AdvancementsGrabbableView from "./AdvancementsGrabbableView";
import {BACKGROUND_TILE_SIZE, WINDOW_HEIGHT, WINDOW_WIDTH} from "../config";

const styles = theme => ({
    root: {
        width: `${WINDOW_WIDTH}px`,
        height: `${WINDOW_HEIGHT}px`,
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
        pointerEvents: "none",
    },
    background: {
        position: "relative",
        left: "2.5%",
        top: "2.5%",
        width: "95%",
        height: "95%",
        backgroundSize: BACKGROUND_TILE_SIZE
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
        advancements: [
            {
                id: 0,
                title: "Minecraft",
                description: "The heart and story of the game",
                logo: "grass.png",
                level: 0,
                parent: null,
                children: 1,
                achieved: true
            },
            {
                id: 1,
                title: "Stone age",
                description: "Mine stone with your new pickaxe",
                logo: "wooden_pickaxe.png",
                level: 1,
                parent: 0,
                children: 0,
                achieved: false
            },
        ]
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
    }

    constructor() {
        super();
        this.handleChangeAdvanementsType = this.handleChangeAdvanementsType.bind(this);
    }

    handleChangeAdvanementsType(type) {
        this.setState({
            ...this.state,
            advancementsType: type,
        })
    }

    render() {
        const {advancementsType} = this.state;
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
                <div className={classes.frame}>
                    <div className={classes.windowTitle}>
                        Advancements
                    </div>
                </div>
                <AdvancementsGrabbableView type={advancementsType}/>
            </div>
        )
    }

}

export default withStyles(styles, {withTheme: true})(AdvancementsWindow);