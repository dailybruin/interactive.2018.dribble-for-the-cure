import * as React from 'react';
import './style.scss';

export interface ImageProps {
  index: number // KSM: added for indexing of slide image
  url: string
  caption: string
  credit: string
  alt: string
  mediaOnClick: () => void // KSM: added for indexing of slide image
}

export interface VideoProps {
  index: number // KSM: added for indexing of slide image
  url: string
  caption: string
  credit: string
  alt: string
}

export function Image(props: ImageProps) {
  return (
    <figure className="img-container">
      <img src={props.url} alt={props.alt} onClick={() => props.mediaOnClick()} />
      <figcaption className="caption-container">
        <div className="caption">
          {props.caption} ({props.credit})
        </div>
      </figcaption>
    </figure>
  )
}

export function Video(props: VideoProps) {
  return (
    <figure>
      <video muted
        src={props.url}
        width="100%"
        height="100%"
        className="vi" autoPlay loop>
          Sorry, your browser doesn't support embedded videos.
      </video>
    </figure>
  )
}

enum ContentType {
  Text = 'text',
  Image = 'image',
  Video = 'video',
}

interface Text {
  value: string
}

/**
 * Article properties.
 */
interface ArticleProps {
  /** The paragraphs of content for the story. */
  content: any[]
  dropcap: boolean
  id: string
}

/** A footer to go at the bottom of every page. */
export default class Article extends React.Component<ArticleProps> {
  public static defaultProps = {
    dropcap: false,
    mediaOnClick: () => {},
    id: "",
  }

  public render() {
    const renderedContent = this.props.content.map(
      (content: any, i: number) => {
        switch (content.type) {
          case ContentType.Text:
            const text = content as Text
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text.value,
                }}
              />
            )
          case ContentType.Image:
            const image = content as ImageProps
            return (
              <div>
                <Image {...image} />
              </div>
            )
          case ContentType.Video:
            const video = content as VideoProps
            return (
              <div>
                <Video {...video} />
              </div>
            )
          default:
            break
        }
      }
    )

    return <article id={this.props.id}>{renderedContent}</article>
  }
}
