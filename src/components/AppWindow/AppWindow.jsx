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
import HeaderMenu from './components/HeaderMenu'
import AppWindowFooter from './components/AppWindowFooter'
import AppWindowInput from './components/AppWindowInput'
import AppWindowButton from './components/AppWindowButton'
import AppWindowSelect from './components/AppWindowSelect'
import styles from './AppWindow.module.css'
import divideStyleIDString from 'utils/divideStyleIDString'
export default function AppWindow({ children, width, height, top, left, zIndex = 0, onClick, styleID }) {
  const viewPortSize = useMediaQuery()
  return (
    <Draggable handle=".handle" disabled={viewPortSize === 'mobile' ? true : false}>
      <AppWindowMain
        className={`${divideStyleIDString(styles, styleID)}`}
        width={width}
        height={height}
        top={top}
        left={left}
        zIndex={zIndex}
        onClick={onClick}
      >
        {children}
      </AppWindowMain>
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
AppWindow.HeadMenu = HeaderMenu
AppWindow.Footer = AppWindowFooter
AppWindow.Input = AppWindowInput
AppWindow.Button = AppWindowButton
AppWindow.Select = AppWindowSelect

const AppWindowMain = styled(Window)`
  width: ${props => props.width};
  height: ${props => props.height};
  position: fixed;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${props => props.zIndex};
  @media screen and (max-width: 600px) {
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 90vh !important;
    padding: 0 !important;
  }
`
