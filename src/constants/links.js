export const API_URL = 'https://job-ledger-backend.onrender.com'

export const MAIN = '/'

export const JOBS_GET = '/get-all-jobs'
export const JOBS_LINK = '/jobs'
export const JOB_DETAILS_GET = '/get-job'
export const JOB_DETAILS_LINK = '/jobs'
// export const JOBS_BY_FIRM_GET = '/get-jobs-by-firm/firmId'

export const FIRMS_GET = '/get-all-firms'
export const FIRMS_LINK = '/firms'
export const FIRM_DETAILS_GET = '/get-firm'
export const FIRM_DETAILS_LINK = '/firms'

export const ARTICLES_GET = '/get-all-articles'
export const ARTICLES_LINK = '/articles'
export const ARTICLE_DETAILS_GET = '/get-article'
export const ARTICLE_DETAILS_LINK = '/articles'
// export const ARTICLES_BY_FIRM_GET = '/get-articles-by-firm/firmId'

export const NAV_ITEMS = [
  {
    title: 'Active Positions',
    link: JOBS_LINK
  },
  {
    title: 'Firms',
    link: FIRMS_LINK
  },
  {
    title: 'Insights',
    link: ARTICLES_LINK
  }
]

export const FOOTER_LINKS = [
  {
    title: 'Active Positions',
    link: JOBS_LINK
  },
  {
    title: 'Firms',
    link: FIRMS_LINK
  },
  {
    title: 'Insights',
    link: ARTICLES_LINK
  },
  {
    title: 'Terms',
    link: '/'
  },
  {
    title: 'Privacy',
    link: '/'
  }
]
