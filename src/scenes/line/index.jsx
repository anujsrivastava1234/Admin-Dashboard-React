import { Box } from "@mui/material";
import Header from "../../components/Header";
import Linechart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m='20px'>
            <Header title='LINE CHART' subTitle='Simple Line chart' />
            <Box height='75vh'>
                <Linechart />
            </Box>
        </Box>
    )
}

export default Line;