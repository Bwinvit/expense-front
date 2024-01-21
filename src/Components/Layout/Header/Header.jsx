import styled from "styled-components";
import Menu from "./HeaderMenu/Menu";

const HeaderComp = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    align-items: center;

    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};

    .logo {
        font-size: 2em;
        color: ${(props) => props.theme.colors.secondary};
    }
`;

const Header = () => {

    return (
        <HeaderComp>
            <div className="left_nav">
                <div className="logo">DSS</div>
            </div>
            <div className="right_nav">
                <Menu />
            </div>
        </HeaderComp>
    );
};

export default Header;
