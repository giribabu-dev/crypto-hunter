import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CryptoContext } from "../context-api/CryptoContext";

function Header() {

    const navigate = useNavigate()
    const { currency, setCurrency } = useContext(CryptoContext)

    const darkTheme = createTheme({
        palette: {
            mode: "dark"
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            style={styles.title}
                            onClick={() => navigate("/")}
                            variant="h6"
                        >
                            Crypto Hunter
                        </Typography>
                        <Select
                            variant="outlined"
                            value={currency}
                            sx={{
                                width: 100,
                                height: 40,
                                ml: 2,
                                color: "white",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white"
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "gold"
                                },
                                "& .MuiSvgIcon-root": {
                                    color: "white"
                                }
                            }}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
};

const styles = {
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

export default Header;