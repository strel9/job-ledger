import React from 'react'
import Image from 'next/image'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import CardJobs from 'components/CardJob'

export default function TabsComponent ({ firm, jobs }) {
  const [valueTab, setValueTab] = React.useState(0)

  function CustomTabPanel (props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  function a11yProps (index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    }
  }

  function createMarkup () {
    return { __html: firm?.last_scraped }
  }

  const handleChange = (event, newValue) => {
    setValueTab(newValue)
  }
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}
      >
        <Tabs value={valueTab} onChange={handleChange} aria-label='basic tabs example'>
          <Tab
            label='About'
            sx={{
              fontWeight: 700,
              fontSize: '28px',
              textTransform: 'capitalize',
              borderRadius: 8
            }}
            {...a11yProps(0)}
          />
          <Tab
            label='Jobs'
            sx={{
              fontWeight: 700,
              fontSize: '28px',
              textTransform: 'capitalize',
              borderRadius: 8
            }}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={valueTab} index={0}>
        <Box
          sx={{
            mb: 2.3,
            color: '#242A35'
          }}
          dangerouslySetInnerHTML={createMarkup()}
        />

        <Image
          src='/quality.jpg'
          alt='quality'
          width={1024}
          height={456}
          priority
        />
      </CustomTabPanel>

      <CustomTabPanel value={valueTab} index={1}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {(jobs?.map((item, index) => (
            index < 6 && (
              <Grid xs={4} sm={4} md={4} key={index}>
                <CardJobs {...item} />
              </Grid>
            ))
          ))}
        </Grid>
      </CustomTabPanel>
    </>
  )
}
