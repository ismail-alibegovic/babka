import {business} from '@/lib/content';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},sitemap:business.origin+'/sitemap.xml'};}
