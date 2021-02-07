import React from "react";
import {withStyles} from "@material-ui/core";
import {ADVANCEMENT_ICON_SIZE, ADVANCEMENT_MARGIN_SIZE, ADVANCEMENT_SIZE, LABEL_SIZE} from "../config";
import AdvancementIcon from "./AdvancementIcon";

const styles = theme => ({
    advancement: {
        position: "absolute",
        cursor: "pointer"
    },
    labelStart: {
        left: "-5px",
        top: `${(ADVANCEMENT_SIZE - (LABEL_SIZE * 20)) / 2}px`,
        position: "absolute",
        width: `${LABEL_SIZE * 3}px`,
        height: `${LABEL_SIZE * 20}px`,
        backgroundSize: "contain",
        zIndex: 4,
    },
    labelMiddle: {
        position: "absolute",
        left: `${ADVANCEMENT_SIZE - 4}px`,
        fontSize: "30px",
        fontFamily: "Minecraft",
        paddingLeft: "10px",
        paddingRight: "10px",
        top: `${(ADVANCEMENT_SIZE - (LABEL_SIZE * 20)) / 2}px`,
        height: `${LABEL_SIZE * 20}px`,
        backgroundSize: "contain",
        display: "flex",
        zIndex: 4,
    },
    labelEnd: {
        top: `${(ADVANCEMENT_SIZE - (LABEL_SIZE * 20)) / 2}px`,
        position: "absolute",
        width: `${LABEL_SIZE * 3}px`,
        height: `${LABEL_SIZE * 20}px`,
        backgroundSize: "contain",
        zIndex: 4,
    },
    descriptionStart: {
        left: "-5px",
        top: `${ADVANCEMENT_SIZE - 33}px`,
        position: "absolute",
        width: `${LABEL_SIZE * 3}px`,
        height: `${LABEL_SIZE * 20}px`,
        backgroundSize: "contain",
        zIndex: 3,
    },
    descriptionMiddle: {
        position: "absolute",
        fontSize: "16px",
        fontFamily: "Minecraft",
        width: "max-content",
        paddingLeft: "10px",
        paddingRight: "10px",
        top: `${ADVANCEMENT_SIZE - 33}px`,
        height: `${LABEL_SIZE * 20}px`,
        backgroundSize: "contain",
        display: "flex",
        zIndex: 3,
    },
    descriptionEnd: {
        top: `${ADVANCEMENT_SIZE - 33}px`,
        position: "absolute",
        width: `${LABEL_SIZE * 3}px`,
        height: `${LABEL_SIZE * 20}px`,
        backgroundSize: "contain",
        zIndex: 3,
    },
    title: {
        zIndex: 4,
        color: "white",
        textShadow: "3px 3px #423D2F",
        margin: "auto"
    },
    description: {
        zIndex: 4,
        color: "#54FC54",
        marginTop: "auto",
        marginBottom: "12px"
    }
});

class Advancement extends React.Component {

    middleTitle =  React.createRef();
    middleDescription =  React.createRef();

    state = {
        isOpened: false,
        middleTitleWidth: 0,
        middleDescriptionWidth: 0
    }

    onClick() {
        this.setState({
            ...this.state,
            isOpened: !this.state.isOpened
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.middleTitleWidth === 0 && this.middleTitle.current && this.middleTitle.current.clientWidth && this.middleTitle.current.clientWidth !== this.state.middleTitleWidth) {
            this.setState({
                ...this.state,
                middleTitleWidth: this.middleTitle.current.clientWidth
            });
        }
        if (this.state.middleDescriptionWidth === 0 && this.middleDescription.current &&  this.middleDescription.current.clientWidth  && this.middleDescription.current.clientWidth !== this.state.middleDescriptionWidth) {
            this.setState({
                ...this.state,
                middleDescriptionWidth: this.middleDescription.current.clientWidth
            });
        }
    }

    render() {
        const {isOpened, middleTitleWidth, middleDescriptionWidth} = this.state;
        const {x, y, classes, advancement} = this.props;

        const labelWidth = Math.max(middleDescriptionWidth - ADVANCEMENT_SIZE, middleTitleWidth);

        return (
            <div className={classes.advancement} onClick={this.onClick.bind(this)} style={{
                left: x + advancement.level * (ADVANCEMENT_SIZE + ADVANCEMENT_MARGIN_SIZE) + 200,
                top: y + 250,
            }}>
                {isOpened && <div className={classes.labelStart} style={{
                    backgroundImage: `url("./assets/img/advancements/label/start-label-${advancement.achieved ? 'worn' : 'raw'}.png")`
                }}>
                </div>}
                <AdvancementIcon selected={isOpened} advancement={advancement}/>
                {isOpened && <>
                    <div className={classes.labelMiddle} ref={this.middleTitle} style={{
                        width: labelWidth < middleTitleWidth ? 'max-content' : labelWidth - 20,
                        backgroundImage: `url("./assets/img/advancements/label/middle-label-${advancement.achieved ? 'worn' : 'raw'}.png")`
                    }}>
                        <span className={classes.title}>{advancement.title}</span>
                    </div>
                    <div className={classes.labelEnd} style={{
                        left: `${ADVANCEMENT_SIZE + labelWidth - 4}px`,
                        backgroundImage: `url("./assets/img/advancements/label/end-label-${advancement.achieved ? 'worn' : 'raw'}.png")`
                    }}>
                    </div>
                    <div className={classes.descriptionStart} style={{
                        backgroundImage: `url("./assets/img/advancements/label/start-label-description.png")`
                    }}>
                    </div>
                    <div className={classes.descriptionMiddle} ref={this.middleDescription} style={{
                        backgroundImage: `url("./assets/img/advancements/label/middle-label-description.png")`
                    }}>
                        <span className={classes.description}>{advancement.description}</span>
                    </div>
                    <div className={classes.descriptionEnd} style={{
                        left: `${ADVANCEMENT_SIZE + labelWidth - 4}px`,
                        backgroundImage: `url("./assets/img/advancements/label/end-label-description.png")`
                    }}>
                    </div>
                </>}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Advancement);