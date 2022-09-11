import { styled } from "stitches.config";
import Score from "./Score";

const Header = () => {
    return (
        <Wrapper>
            <img src="./logo.svg" />
            <Score />
        </Wrapper>
    )
}
export default Header;

const Wrapper = styled("div", {
    position: "relative",
    top: "$12",

    flexBetween: "center",

    width: "100%",
    height: "155px",

    padding: "$4",
    border: "2px solid $headerOutline",
    borderRadius: "$2xl"
});