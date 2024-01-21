import styled from "styled-components";

const FooterComp = styled.footer`
      display: flex;
      background-color: ${(props) => props.theme.colors.primary};
      padding: .5em;
      color: ${props => props.theme.colors.text};
`

const Footer = () => {
    return (
            <FooterComp className="footer">
                <p>Copyright © 2024 DSS. All Rights Reserved.</p>
            </FooterComp>
    );
};

export default Footer