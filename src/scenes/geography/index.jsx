import { Box,useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title='Geography Chart' subTitle='Simple Geography chart' />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`}  borderRadius='4px'>
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geography; 
