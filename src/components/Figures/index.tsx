interface FigureItemProps {
    srcSet: string,
    media: string
}

type FiguresProps = {
    figCaption?: string;
    src?: string;
    mediaSources?: Array<FigureItemProps>;
    alt?: string
}

export function Figures ({figCaption, src, mediaSources, alt}: FiguresProps) {

    return (
    <div>
        <figure>
            <picture>
                {
                    mediaSources && 
                    mediaSources.map(({srcSet, media},i) =>
                    srcSet && media && 
                        <source key={i} media={media} srcSet={srcSet}></source>
                    )
                }
                <img src={src} className="img-fluid" alt={alt}></img>
            </picture>
            <figcaption>{figCaption}</figcaption>
        </figure>
    </div>)
}

  