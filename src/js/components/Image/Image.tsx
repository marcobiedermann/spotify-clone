export interface ImageProps {
  alt: string;
  className?: string;
  height: number;
  url: string;
  width: number;
}

function Image(props: ImageProps): JSX.Element {
  const { url, ...otherProps } = props;

  return <img src={url} {...otherProps} />;
}

export default Image;
