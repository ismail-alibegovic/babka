import {business,pathFor,type Page,type Locale} from '@/lib/content';
export default function sitemap(){return (['bs','en'] as Locale[]).flatMap(locale=>(['home','menu','story','visit'] as Page[]).map(page=>({url:business.origin+pathFor(locale,page),changeFrequency:'monthly' as const,priority:page==='home'?1:.7})));}
