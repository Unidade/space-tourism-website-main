import Head from "next/head"
import {
  ImageProps,
  StaticImageData,
  unstable_getImgProps as getImgProps,
} from "next/image"

export type AdaptiveImageProps = {
  mobileImage: StaticImageData
  tabletImage: StaticImageData
  desktopImage: StaticImageData
} & Partial<ImageProps>

export const AdaptiveImage = ({
  priority = true,
  sizes = "100vw",
  placeholder = "blur",
  fill = true,
  alt = "Hero Image",
  tabletImage,
  desktopImage,
  quality = 75,
  mobileImage,
  className,
  style = {
    objectFit: "cover",
  },
  ...props
}: AdaptiveImageProps) => {
  const commonPreload = {
    rel: "preload",
    as: "image",
    imageSizes: sizes,
  }

  const common = { alt, fill, sizes, priority, className, style, ...props }

  // grab the rest props to make this the default image
  const { srcSet: mobileSrcSet, ...rest } = getImgProps({
    ...common,
    src: mobileImage,
  }).props

  const { srcSet: tabletSrcSet } = getImgProps({
    ...common,
    src: tabletImage,
  }).props

  const { srcSet: desktopSrcSet } = getImgProps({
    ...common,
    src: desktopImage,
  }).props

  const mobileMedia = `(max-width: 639px)`
  const tabletMedia = `(min-width: 640px) and (max-width: 1023px)`
  const desktopMedia = `(min-width: 1024px)`

  return (
    <>
      {/* <Head>
        <link
          {...commonPreload}
          media={desktopMedia}
          href={desktopImage.src}
          imageSrcSet={desktopSrcSet}
        />
        <link
          {...commonPreload}
          media={tabletMedia}
          href={tabletImage.src}
          imageSrcSet={tabletSrcSet}
        />
        <link
          {...commonPreload}
          media={mobileMedia}
          href={mobileImage.src}
          imageSrcSet={mobileSrcSet}
        />
      </Head> */}
      <picture className={className}>
        <source media={desktopMedia} srcSet={desktopSrcSet} />
        <source media={tabletMedia} srcSet={tabletSrcSet} />
        <source media={mobileMedia} srcSet={mobileSrcSet} />
        <img {...rest} alt={alt} />
      </picture>
    </>
  )
}
