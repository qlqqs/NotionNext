// eslint-disable-next-line @next/next/no-document-import-in-page
import BLOG from '@/blog.config'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.LANG}>
        <Head>
          {/* 预加载字体 */}
          {BLOG.FONT_AWESOME && (
            <>
              <link
                rel='preload'
                href={BLOG.FONT_AWESOME}
                as='style'
                crossOrigin='anonymous'
              />
              <link
                rel='stylesheet'
                href={BLOG.FONT_AWESOME}
                crossOrigin='anonymous'
                referrerPolicy='no-referrer'
              />
            </>
          )}
          <script
              defer // defer 属性确保脚本在 HTML 解析完成后、DOMContentLoaded 事件之前执行
              src="https://uma.qlqqs.com/script.js"
              data-website-id="37f80f4a-ada4-4ac9-ab42-ab95a40cde7f"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
