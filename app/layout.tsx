import type {Metadata} from 'next';
import {business} from '@/lib/content';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(business.origin),title:'Babka Blend & Bakery — Sarajevo',description:'Mala pekara. Velika ljubav. Babka Blend & Bakery, Tešanjska bb, Sarajevo.',icons:{icon:'/favicon.svg'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){
const schema={'@context':'https://schema.org','@type':'Bakery',name:business.name,url:business.origin,address:{'@type':'PostalAddress',streetAddress:'Tešanjska bb',addressLocality:'Sarajevo',addressCountry:'BA'},hasMap:business.maps,sameAs:[business.instagram,business.order],servesCuisine:['Bakery','Breakfast','Coffee']};
return <html lang="bs"><head><link rel="preload" as="image" href="/images/hero-1280.webp"/></head><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>{children}</body></html>;
}
