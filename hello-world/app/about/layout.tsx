import style from './styles.module.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Hello World About Us',
  }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <main className={style.main}>
                {children}
            </main>
        </>
    )
}