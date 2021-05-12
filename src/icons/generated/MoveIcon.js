import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15.71 7.29l-2-2a1.003 1.003 0 00-1.42 1.42l.3.29H9V3.41l.29.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-2-2C8.53.11 8.28 0 8 0s-.53.11-.71.29l-2 2a1.003 1.003 0 001.42 1.42l.29-.3V7H3.41l.29-.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-2 2C.11 7.47 0 7.72 0 8c0 .28.11.53.29.71l2 2a1.003 1.003 0 001.42-1.42L3.41 9H7v3.59l-.29-.29A.965.965 0 006 12a1.003 1.003 0 00-.71 1.71l2 2c.18.18.43.29.71.29s.53-.11.71-.29l2-2a1.003 1.003 0 00-1.42-1.42l-.29.3V9h3.59l-.29.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l2-2c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]
const svgPaths20 = [
  'M19.71 9.29l-3-3a1.003 1.003 0 00-1.42 1.42L16.59 9H11V3.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71l-3-3C10.53.11 10.28 0 10 0s-.53.11-.71.29l-3 3a1.003 1.003 0 001.42 1.42L9 3.41V9H3.41L4.7 7.71c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71l-3 3C.11 9.47 0 9.72 0 10c0 .28.11.53.29.71l3 3a1.003 1.003 0 001.42-1.42L3.41 11H9v5.59L7.71 15.3A.965.965 0 007 15a1.003 1.003 0 00-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3a1.003 1.003 0 00-1.42-1.42L11 16.59V11h5.59l-1.29 1.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z'
]

export const MoveIcon = memo(
  forwardRef(function MoveIcon(props, ref) {
    return <Icon svgPaths16={svgPaths16} svgPaths20={svgPaths20} ref={ref} name="move" {...props} />
  })
)
