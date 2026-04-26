interface SidebarProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

const mainNavItems = [
  { id: 'tools', label: '工具面板', icon: 'grid' },
  { id: 'quick', label: '快捷操作', icon: 'bolt' },
  { id: 'favorites', label: '收藏工具', icon: 'star' },
  { id: 'recent', label: '最近使用', icon: 'clock' },
]

const categoryNavItems = [
  { id: 'text', label: '文本处理', icon: 'document' },
  { id: 'image', label: '图片工具', icon: 'image' },
  { id: 'dev', label: '开发工具', icon: 'code' },
  { id: 'calc', label: '计算转换', icon: 'calculator' },
]

function Sidebar({ activeNav, setActiveNav }: SidebarProps) {
  const renderIcon = (icon: string) => {
    const icons: Record<string, JSX.Element> = {
      grid: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      bolt: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      star: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      clock: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      document: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      code: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      calculator: (
        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    }
    return icons[icon] || null
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="logo">
          <div className="logo-icon">TB</div>
          <span className="logo-text">ToolBox</span>
        </a>
      </div>

      <nav className="nav-section">
        <div className="nav-label">主菜单</div>
        <ul className="nav-list">
          {mainNavItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveNav(item.id)
                }}
              >
                {renderIcon(item.icon)}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="nav-section">
        <div className="nav-label">分类</div>
        <ul className="nav-list">
          {categoryNavItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveNav(item.id)
                }}
              >
                {renderIcon(item.icon)}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">U</div>
          <div className="user-info">
            <div className="user-name">用户</div>
            <div className="user-role">免费版</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
