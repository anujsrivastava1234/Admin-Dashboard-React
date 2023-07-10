import { Box } from "@mui/material";
import Header from "../../components/Header";
import Pie from "../../components/PieChart";
const Bar = () => {
    return (
        <Box m='20px'>
            <Header title='PIE CHART' subTitle='Simple PIE chart' />
            <Box height='75vh'>
                <Pie />
            </Box>
        </Box>
    )
}

export default Bar;
