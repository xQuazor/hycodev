import Navigation from "./navigation/page";
import global from"../../styles/globals.scss";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className={global.container}>
          <Navigation/>
          {children}
      </div>

      </body>
    </html>
  )
}
