type TopmenuProps = {
  newsData?: Array<any>;
  dateTimeMsg?: string;
  srcImg?: string;
}

export function News ({ newsData, dateTimeMsg, srcImg }: TopmenuProps) {
  return (
    <div className='list-group'>
      {(newsData || []).map((news) => (
        <a href='#' className='list-group-item list-group-teaser link-trapeze-vertical'>
          <div className='list-group-teaser-container'>
            <div className='list-group-teaser-thumbnail'>
              <picture>
                <source media='(min-width: 1140px)' srcSet={news.x1140} />
                <source media='(min-width: 960px)' srcSet={news.x960} />
                <source media='(min-width: 720px)' srcSet={news.x720} />
                <source media='(min-width: 541px)' srcSet={news.x541} />
                <source media='(max-width: 540px)' srcSet={news.x540} />
                <img src={srcImg} className='img-fluid' alt='image description' />
              </picture>
            </div>
            <div className='list-group-teaser-content' itemScope itemType='http://schema.org/Article'>
              <p className='h5' itemProp='name'>{news.itempropName}</p>
              <p>
                <time dateTime='2018-03-26' itemProp='datePublished'><span className='sr-only'>{dateTimeMsg}</span>{news.published}</time>
                <span className='text-muted' itemProp='description'>{news.itempropDesc}
                </span>
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
