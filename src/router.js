import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
    Navigate,
} from "react-router-dom";
import styled from "styled-components";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import { useAuth } from "./Context/Auth";
import Home from "./Components/Home/Home";
import LeftMenu from "./Components/Layout/Lefter/LeftMenu";
import useScreenDimensions from "./utils/useScreenDimensions";
import { useEffect, useState } from "react";

const MainContent = styled.div`
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    min-height: 90vh;
`;

const Container = styled.div`
    display: flex;

    @media (max-width: 400px) {
        display: grid;
        justify-content: space-between;
    }
`;

const LeftNavContent = styled.div`
    width: 20%;
    max-width: 400px;

    @media (max-width: 1000px) {
        width: 16%;
    }

    @media (max-width: 400px) {
        width: 100%;
        max-width: none;
    }
`;

const PrivateRoute = () => {
    const { CheckToken } = useAuth();
    return CheckToken() ? <Outlet /> : <Navigate to={"/guest"} replace />;
};

const AppRouter = () => {
    const { user } = useAuth();
    const { width } = useScreenDimensions();

    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        if (width <= 1000) {
            setCollapsed(true);
            if (width <= 400) {
                setCollapsed(false);
            }
        } else {
            setCollapsed(false);
        }
    }, [width]);

    return (
        <Router>
            <Header />
            <MainContent>
                <Container>
                    <LeftNavContent>
                        {user ? <LeftMenu collapsed={collapsed} /> : <></>}
                    </LeftNavContent>
                    <Routes>
                        <Route exact path="/guest" element={<>Guest</>} />
                        <Route element={<PrivateRoute />}>
                            <Route exact path="/home" element={<Home />} />
                        </Route>
                    </Routes>
                </Container>
            </MainContent>
            <Footer />
        </Router>
    );
};

export default AppRouter;
