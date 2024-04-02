import { useState } from 'react'
import Markdown from 'react-markdown'
import { Button, GroupBox, Tab, TabBody, Tabs } from 'react95'
import styled from 'styled-components'
// import styled from 'styled-components'

export default function ContentTab({ tabDataObj, path }) {
  const [state, setState] = useState({
    activeTab: 0,
  })
  const { activeTab } = state
  const handleChange = value => {
    setState({ activeTab: value })
  }
  const onClickRouteBtn = url => {
    window.open(url)
  }
  return (
    <>
      <Tabs value={activeTab} onChange={handleChange} style={{ height: '15%' }}>
        <Tab value={0}>구현기능</Tab>
        <Tab value={1}>사용기술</Tab>
        <Tab value={2}>더보기</Tab>
      </Tabs>
      <TabBody style={{ height: '80%' }}>
        {activeTab === 0 && (
          <GroupBoxCustom label="Implement">
            <Markdown>{tabDataObj.implementTab}</Markdown>
          </GroupBoxCustom>
        )}
        {activeTab === 1 && (
          <GroupBoxCustom label="Skill">
            <Markdown>{tabDataObj.skillTab}</Markdown>
          </GroupBoxCustom>
        )}
        {activeTab === 2 && (
          <GroupBoxButtonCustom label="Details">
            <Button primary onClick={() => onClickRouteBtn(path.sitePath)} disabled={path.sitePath === null}>
              Visit WebSite
            </Button>
            <Button primary onClick={() => onClickRouteBtn(path.gitPath)} disabled={path.gitPath === null}>
              Visit Github Repo
            </Button>
          </GroupBoxButtonCustom>
        )}
      </TabBody>
    </>
  )
}

const GroupBoxCustom = styled(GroupBox)`
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`
const GroupBoxButtonCustom = styled(GroupBoxCustom)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`
