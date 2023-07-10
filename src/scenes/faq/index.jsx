import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/material/ExpandMore"
import { tokens } from "../../theme";
import { ExpandMoreSharp } from "@mui/icons-material";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px' >
            <Header title='FAQ' subTitle='Frequently Asked Questions Page' />
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreSharp />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreSharp />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreSharp />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreSharp />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreSharp />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreSharp />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </Box>
    )

}

export default FAQ;
