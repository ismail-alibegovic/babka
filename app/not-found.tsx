import {SiteShell} from '@/components/babka/site';
import {copy} from '@/lib/content';
export default function NotFound(){const c=copy.bs;return <SiteShell locale="bs" page="home"><div className="not-found"><span className="eyebrow">404</span><h1>{c.notFound}</h1><p>{c.notFoundText}</p><a href="/" className="button">{c.returnHome} →</a></div></SiteShell>}
