import { Image } from './Image'

export function Header () {
   return (
        <header style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#23272f'
        }}>
            <nav className="nav" style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                maxWidth: '1000px',
                justifySelf: 'center',
                gap: '0 300px'
            }}>
                <Image />
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '0 30px',
                    color: '#fff'
                }}>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
   )
}