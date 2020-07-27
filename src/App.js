import React from 'react'
import './index.scss'
// 导入子组件
import Top from './components/Top'
import Content from './components/Content'
function App() {
  return (
    <div className="App">
      <Top />
      <Content />
    </div>
  )
}

export default App
