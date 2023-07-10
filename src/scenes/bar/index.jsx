import { Box } from "@mui/material";
import Header from "../../components/Header";
import Barchart from "../../components/BarChart";

const Bar = () => {
    return (
        <div m='20px'>
            <Header title='BAR CHART' subTitle='Simple Bar chart' />
            <Box height='75vh'>
                <Barchart />
            </Box>
        </div>
    )
}

export default Bar;
