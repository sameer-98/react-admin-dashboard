import Accordian from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import Header from "../../components/Header";
import { Box, useTheme, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box sx={{m: "20px"}}>
        <Header title="FAQ" subtitle="Frequently Asked Question Page" />
        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                </Typography>
            <AccordianDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium 
                    repudiandae corrupti quis unde veniam provident architecto labore commodi repellendus doloribus.
                </Typography>
            </AccordianDetails>
            </AccordianSummary>
        </Accordian>
        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                </Typography>
            <AccordianDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium 
                    repudiandae corrupti quis unde veniam provident architecto labore commodi repellendus doloribus.
                </Typography>
            </AccordianDetails>
            </AccordianSummary>
        </Accordian>
        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favourite Question
                </Typography>
            <AccordianDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium 
                    repudiandae corrupti quis unde veniam provident architecto labore commodi repellendus doloribus.
                </Typography>
            </AccordianDetails>
            </AccordianSummary>
        </Accordian>
        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random Question
                </Typography>
            <AccordianDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium 
                    repudiandae corrupti quis unde veniam provident architecto labore commodi repellendus doloribus.
                </Typography>
            </AccordianDetails>
            </AccordianSummary>
        </Accordian>
        <Accordian defaultExpanded>
            <AccordianSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                        The Last Question
                </Typography>
            <AccordianDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium 
                    repudiandae corrupti quis unde veniam provident architecto labore commodi repellendus doloribus.
                </Typography>
            </AccordianDetails>
            </AccordianSummary>
        </Accordian>
    </Box>
};
export default FAQ;