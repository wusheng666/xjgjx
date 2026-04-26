import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import StatsCard from './components/StatsCard'
import ToolCard from './components/ToolCard'
import QuickActions from './components/QuickActions'
import TitleBar from './components/TitleBar'

const tools = [
  {
    id: 1,
    name: 'JSON 格式化',
    description: '快速格式化和验证 JSON 数据，支持语法高亮和错误提示',
    tag: '开发工具',
    color: 'cyan',
    icon: 'document',
  },
  {
    id: 2,
    name: '图片压缩',
    description: '在线压缩图片文件，支持多种格式，保持高质量输出',
    tag: '图片工具',
    color: 'purple',
    icon: 'image',
  },
  {
    id: 3,
    name: '单位转换',
    description: '长度、重量、温度等单位快速转换，支持多种计量单位',
    tag: '计算转换',
    color: 'pink',
    icon: 'swap',
  },
  {
    id: 4,
    name: '代码美化',
    description: '支持 HTML、CSS、JavaScript 等多种语言的代码格式化',
    tag: '开发工具',
    color: 'blue',
    icon: 'code',
  },
  {
    id: 5,
    name: '密码生成器',
    description: '生成安全的随机密码，可自定义长度和字符类型',
    tag: '安全工具',
    color: 'orange',
    icon: 'lock',
  },
  {
    id: 6,
    name: '颜色选择器',
    description: '拾取和转换颜色值，支持 HEX、RGB、HSL 等格式',
    tag: '设计工具',
    color: 'yellow',
    icon: 'color',
  },
]

const stats = [
  { value: '24', label: '可用工具', color: 'cyan', icon: 'box' },
  { value: '156', label: '本月使用', color: 'purple', icon: 'bolt' },
  { value: '8', label: '收藏工具', color: 'pink', icon: 'star' },
  { value: '2.3h', label: '节省时间', color: 'blue', icon: 'clock' },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeNav, setActiveNav] = useState('tools')

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app-container">
      <TitleBar />
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <main className="main-content">
        <TopBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <header className="page-header">
          <h1 className="page-title">工具箱</h1>
          <p className="page-subtitle">探索并使用各种实用工具，提升你的工作效率</p>
        </header>
        <div className="stats-row">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
        <section className="tools-section">
          <div className="section-header">
            <h2 className="section-title">热门工具</h2>
            <a href="#" className="view-all">
              查看全部
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>
        <QuickActions />
      </main>
    </div>
  )
}

export default App
