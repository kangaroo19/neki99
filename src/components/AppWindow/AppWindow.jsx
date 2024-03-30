import styles from './AppWindow.module.css'
import React from 'react'
import { Window } from 'react95'
import styled from 'styled-components'
import AppWindowHeader from './components/AppWindowHeader'
import AppWindowContent from './components/AppWindowContent'
import ContentTitle from './components/ContentTitle'
import ContentSection from './components/ContentSection'
import ContentScrollView from './components/ContentScrollView'
import ContentNav from './components/ContentNav'

export default function AppWindow({ children, width }) {
  return (
    <AppWindowMain className={styles.boxContainer} width={width}>
      {children}
    </AppWindowMain>
  )
}

AppWindow.Header = AppWindowHeader
AppWindow.Content = AppWindowContent
AppWindow.ContentTitle = ContentTitle
AppWindow.ContentSection = ContentSection
AppWindow.ScrollView = ContentScrollView
AppWindow.Nav = ContentNav

const AppWindowMain = styled(Window)`
  width: ${props => props.width};
`
