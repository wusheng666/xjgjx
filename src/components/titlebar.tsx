function TitleBar() {
  const handleMinimize = () => {
    window.electronAPI?.minimize()
  }

  const handleMaximize = () => {
    window.electronAPI?.maximize()
  }

  const handleClose = () => {
    window.electronAPI?.close()
  }

  return (
    <div className="title-bar">
      <div className="title-bar-drag">
        <span className="title-bar-title">ToolBox</span>
      </div>
      <div className="title-bar-controls">
        <button className="title-bar-btn minimize" onClick={handleMinimize} title="最小化">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect y="5" width="12" height="2" fill="currentColor" />
          </svg>
        </button>
        <button className="title-bar-btn maximize" onClick={handleMaximize} title="最大化">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="1" y="1" width="10" height="10" strokeWidth="2" stroke="currentColor" fill="none" />
          </svg>
        </button>
        <button className="title-bar-btn close" onClick={handleClose} title="关闭">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TitleBar
