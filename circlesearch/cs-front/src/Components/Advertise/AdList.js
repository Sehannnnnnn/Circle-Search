import React from 'react'
import {Box, Stack} from '@mui/material'
import AddItem from './AdItem'

function AdList() {
  return (
    <div>
        <Stack>
            <AdItem/>
            <AdItem/>
            <AdItem/>
        </Stack>
    </div>
  )
}

export default AdList