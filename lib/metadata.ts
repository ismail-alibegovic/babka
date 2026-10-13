import type {Metadata} from 'next';
import {business,copy,pathFor,type Locale,type Page} from './content';
export function pageMetadata(locale:Locale,page:Page):Metadata{
 const c=copy[locale],title=page==='home'?'Babka Blend & Bakery — Sarajevo':`${c[page]} | Babka Blend & Bakery`;
 return {title,description:c.heroSub+' '+business.address,alternates:{canonical:pathFor(locale,page),languages:{bs:pathFor('bs',page),en:pathFor('en',page)}},openGraph:{title,description:c.introText,url:pathFor(locale,page),siteName:business.name,locale:locale==='bs'?'bs_BA':'en_GB',type:'website',images:[{url:'/images/hero-1280.webp',width:1280,height:853,alt:'Babka website — illustrative chocolate babka photograph'}]},twitter:{card:'summary_large_image',title,description:c.heroSub,images:['/images/hero-1280.webp']}};
}
