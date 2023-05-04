type VideoProps = {
    src?: string;
    frameborder?: number;
    allow?: string
}

export function Video ({ src, frameborder, allow }: VideoProps) {         

    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={src} frameBorder={frameborder} allow={allow}></iframe>
        </div>
    )
}
