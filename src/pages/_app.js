
import StyledComponentsRegistry from '@/app/registry'
import MainLayout from '../components/MainLayout'
 
let outputColorTitle = "color:#fdf0e0; font-size:32px;"
let outputColor = "color:#fdf0e0; font-size:20px;"
console.log("%c † = ♥", outputColorTitle);
console.log("%c Build with love", outputColor);

export default function MyApp({ Component, pageProps }) {
    return (
        <MainLayout>
            <StyledComponentsRegistry>
                <Component {...pageProps} />
            </StyledComponentsRegistry>
        </MainLayout>
    )
}