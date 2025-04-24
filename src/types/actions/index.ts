interface StrapiImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: {
    large: StrapiImageFormat;
    small: StrapiImageFormat;
    medium: StrapiImageFormat;
    thumbnail: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Meta {
  pagination:
    | {
        start: number;
        limit: number;
        total: number;
      }
    | {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
}

interface Banner extends Media {} // Puedes extender o mantener separado si necesitas diferencias

interface Post {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  media: Media[];
  banner: Banner;
  category: Categories;
}

interface Categories {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface PostsResponse {
  data: Post[];
  meta: Meta;
}

interface CategoriesResponse {
  data: Categories[];
  meta: Meta;
}

interface BeeBarProductsResponse {
  data: BeeBar[];
  meta: Meta;
}

interface StrapiEntity {
  id: number;
  documentId: string;
  name: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface BeeBar {
  id: number;
  documentId: string;
  name: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bee_bar_type: StrapiEntity;
  bee_bar_category: StrapiEntity;
  media: Media[];
}

interface BeeBarTypes {
  id: number;
  documentId: string;
  name: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bee_bar_categories?: BeeBarCategories[];
}

interface BeeBarCategories {
  id: number;
  documentId: string;
  name: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bee_bar_type: BeeBarTypes;
}

export type { Meta, Media, Banner, StrapiImageFormat };

export type {
  Post,
  PostsResponse,
  Categories,
  CategoriesResponse,
  BeeBarProductsResponse,
  BeeBar,
  BeeBarTypes,
  BeeBarCategories,
};
