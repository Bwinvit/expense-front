import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./Context/Auth";
import AppRouter from "./router";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
