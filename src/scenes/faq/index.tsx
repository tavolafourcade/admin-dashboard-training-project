// import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactElement } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AccordionDetails, Box, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

import Header from '../../components/Header'
import { tokens } from '../../theme'

const FAQ = (): ReactElement => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions' />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What is the purpose of this app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus ullam incidunt eaque, saepe, officia
            nostrum libero provident cum mollitia placeat culpa nam quod itaque facere corrupti vel recusandae ratione.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What is the purpose of this app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus ullam incidunt eaque, saepe, officia
            nostrum libero provident cum mollitia placeat culpa nam quod itaque facere corrupti vel recusandae ratione.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What is the purpose of this app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus ullam incidunt eaque, saepe, officia
            nostrum libero provident cum mollitia placeat culpa nam quod itaque facere corrupti vel recusandae ratione.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What is the purpose of this app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus ullam incidunt eaque, saepe, officia
            nostrum libero provident cum mollitia placeat culpa nam quod itaque facere corrupti vel recusandae ratione.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            What is the purpose of this app?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellendus ullam incidunt eaque, saepe, officia
            nostrum libero provident cum mollitia placeat culpa nam quod itaque facere corrupti vel recusandae ratione.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
