export type GalleryImage = {
  id: string;
  alt: string;
  caption: string;
  src?: string;
};

// Add a src such as `images/gallery/live-01.jpg` after placing it in public/.
export const galleryImages: GalleryImage[] = [
  { id: 'gallery-image-01', alt: 'Photo placeholder 01', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-02', alt: 'Photo placeholder 02', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-03', alt: 'Photo placeholder 03', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-04', alt: 'Photo placeholder 04', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-05', alt: 'Photo placeholder 05', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-06', alt: 'Photo placeholder 06', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-07', alt: 'Photo placeholder 07', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-08', alt: 'Photo placeholder 08', caption: 'Lorem ipsum dolor sit amet.' },
  { id: 'gallery-image-09', alt: 'Photo placeholder 09', caption: 'Lorem ipsum dolor sit amet.' },
];
