import noImage from '../assets/No-Image-Placeholder.webp'
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const media = 'media/'
    const index = url.indexOf(media) + media.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;