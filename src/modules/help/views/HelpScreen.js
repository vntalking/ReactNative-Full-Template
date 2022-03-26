import React, {useState, useEffect, useRef } from 'react';
import {
    Text,
    Box,
  } from 'native-base';

const HelpScreen = props => {
    console.log(props)
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Text>Help Screen</Text>
        </Box>
    )
}

export default HelpScreen;