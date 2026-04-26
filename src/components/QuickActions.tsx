const actions = [
  { label: '新建工具', icon: 'plus' },
  { label: '导入数据', icon: 'upload' },
  { label: '导出结果', icon: 'download' },
  { label: '帮助中心', icon: 'help' },
]

function QuickActions() {
  const icons: Record<string, JSX.Element> = {
    plus: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    upload: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    download: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    help: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  return (
    <section className="quick-actions">
      <div className="section-header">
        <h2 className="section-title">快捷操作</h2>
      </div>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <a key={index} href="#" className="action-btn">
            <div className="action-icon">{icons[action.icon]}</div>
            <span className="action-label">{action.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default QuickActions
