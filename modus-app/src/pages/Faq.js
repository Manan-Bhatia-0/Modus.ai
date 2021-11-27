import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import faqimage from "./FAQ.png";
import {Grid, Divider} from '@mui/material'
import { makeStyles } from "@mui/styles/";
import "./modus.css";

const useStyles = makeStyles({
  root: {
    maxWidth: '60rem',
    margin: "5rem"
  },
  accordian: {
    marginTop: "2rem"
  }
})

function Faq() {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root} container spacing={3} direction="column">
      <Grid item>
        <h1>FAQ</h1>
        <Divider style={{width: "65rem"}}/>
      </Grid>
      <Grid item>
        <img src={faqimage} alt="Logo" width="60%" height="60%" />
      </Grid>
        <Grid item className={classes.accordian}>
          <Accordion>
            <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
              <Typography>What is Modus.ai?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Modus.ai uses journal entries instead of a set of static questions to analyze the
                user’s mood. This sets us apart from pre-existing apps by enhancing user autonomy
                and ensuring additional personalization. It analyzes the user's current journal entry
                and displays a thorough interpretation of their current mood.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
              <Typography>How do I create a journal entry?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To create a journal entry, go to the New entry tab, enter a title for your entry,
                and start typing. You can make use of our toolbar to personalize your entries.
                You can either save them or submit them for analysis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
              <Typography>How do I see my mood analysis?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once you click submit on the New Entry page, your entry is analyzed by our
                Machine Learning Model that uses Natural Language Processing algorithms
                and your mood scores are shown to you in the form of a pie chart.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
              <Typography>What do my mood scores mean?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It will use a scoring system to identify the proportion of specific emotions
                conveyed in each journal entry. It should be able to detect the following emotions:
                ‘Happy', 'Angry', 'Surprise', 'Sad',  'Fear'.
                Hence, an example analysis could look like
                'Happy': 0.07, 'Angry': 0.09, 'Surprise': 0.16, 'Sad': 0.18, 'Fear': 0.5.
                It is important to note that the sum of the individual proportions will
                never exceed 1 but it may be less than 1. This is because it is possible that at any
                given time, less than 100% of the journal entry may be properly analyzed and/or
                some of the more complex emotions may not be considered by our NLP model for the analysis.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}

export default Faq;
