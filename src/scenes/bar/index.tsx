import { ReactElement } from 'react'
import { Box } from '@mui/material'

import BarChart from '../../components/BarChart'
import Header from '../../components/Header'

const Bar = (): ReactElement => {
  return (
    <Box m='20px'>
      <Header title='Bar Chart' subtitle='Simple Bar Chart' />
      <Box height='75vh'>
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Bar
