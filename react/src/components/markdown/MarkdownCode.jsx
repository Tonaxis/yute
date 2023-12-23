import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Copy, Clipboard } from "lucide-react"

export default function MarkdownCode({ children, language }) {
  const [isCopied, setIsCopied] = useState(false)

  const setCopied = () => {
    setIsCopied(true)
    setTimeout(() => { setIsCopied(false) }, 1000);
  }

    return (
        <div className="md-code">
            <div className="lang">{language}</div>
            <CopyToClipboard text={children}>
                <button className="copy" onClick={() => setCopied()}>
                    {
                        isCopied
                        ? <><p title="Copié !">Copié !</p> <div><Clipboard size={20} /></div></>
                        : <div><Copy size={20} /></div>
                    }
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter language={language} showLineNumbers={true} style={docco} lineNumberStyle={{ color: 'var(--muted)', borderRight: '1px solid var(--md-line)', marginRight: '15px' }}>
                {children}
            </SyntaxHighlighter>
        </div>
    )
}