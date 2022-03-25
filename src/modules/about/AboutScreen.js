import React, {useState, useEffect, useRef } from 'react';
import {
    Text,
    Box,
  } from 'native-base';

const AboutScreen = props => {
    return (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Text>Second Screen</Text>
        </Box>
    )
}

export default AboutScreen;