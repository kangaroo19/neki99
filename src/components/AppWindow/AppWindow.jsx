/* eslint-disable */

import React from 'react'
import { Window } from 'react95'
import styled from 'styled-components'
import AppWindowHeader from './components/AppWindowHeader'
import AppWindowContent from './components/AppWindowContent'
import ContentTitle from './components/ContentTitle'
import ContentSection from './components/ContentSection'
import ContentScrollView from './components/ContentScrollView'
import ContentNav from './components/ContentNav'
import ContentImg from './components/ContentImg'
import ContentTab from './components/ContentTab'
import Draggable from 'react-draggable'
import useMediaQuery from 'utils/hook/useMediaQuery'

export default function AppWindow({ children, width }) {
  const viewPortSize = useMediaQuery()
  return (
    <Draggable handle=".handle" disabled={viewPortSize === 'mobile' ? true : false}>
      <AppWindowMain width={width}>{children}</AppWindowMain>
    </Draggable>
  )
}

AppWindow.Header = AppWindowHeader
AppWindow.Content = AppWindowContent
AppWindow.ContentTitle = ContentTitle
AppWindow.ContentSection = ContentSection
AppWindow.ScrollView = ContentScrollView
AppWindow.Nav = ContentNav
AppWindow.Image = ContentImg
AppWindow.Tab = ContentTab

const AppWindowMain = styled(Window)`
  width: ${props => props.width};
  position: fixed;
  top: 10%;
  left: 30%;
  z-index: 999;
  @media screen and (max-width: 600px) {
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 90vh !important;
  }
`
