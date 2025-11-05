import {Prompt} from 'next/font/google';
import './globals.css';
import { Aside } from '@/components/Aside';
export const metadata = {
  title: "Code Connect",
  description: "Uma rede socoial para desenvolvedores compartilharem conhecimento e projetos.",
};

const prompt = Prompt({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' });
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'> 
            <Aside />
            {children}
        </div>
      
      </body>
    </html>
  );
}
