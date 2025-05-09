import { strapi } from '@strapi/client';
import type { BeeBar, Post, BeeBarTypes, BeeBarCategories } from '@/types/actions';

if (!import.meta.env.PUBLIC_STRAPI_URL || !import.meta.env.PUBLIC_STRAPI_TOKEN) {
  throw new Error('PUBLIC_STRAPI_URL y PUBLIC_STRAPI_TOKEN deben estar definidos en el entorno');
}

const strapiClient = strapi({
  baseURL: `${import.meta.env.PUBLIC_STRAPI_URL}/api`,
  auth: import.meta.env.PUBLIC_STRAPI_TOKEN,
});

// Helper para manejar errores
const handleError = (error: any) => {
  console.error('Strapi Error:', error.response?.data || error.message);
  throw new Error(error.response?.data?.error?.message || 'Error en la solicitud a Strapi');
};

// Método Get Posts
export const getPosts = async () => {
  try {
    const posts = strapiClient.collection('posts');
    const response = await posts.find({
      sort: 'createdAt:desc',
      populate: '*',
    });
    return response.data as Post[];
  } catch (error) {
    return handleError(error);
  }
};

// Método Get Posts By Sort
export const getPostsBySort = async ({ limit = 5 } = {}) => {
  try {
    const posts = strapiClient.collection('posts');

    const response = await posts.find({
      sort: 'createdAt:desc',
      pagination: {
        pageSize: limit,
      },
      populate: '*',
    });

    return response.data as Post[];
  } catch (error) {
    return handleError(error);
  }
};

// Método Get Posts Filtered
export const getPostsFiltered = async ({
  sortBy = 'createdAt',
  sortOrder = 'desc',
  limit = 5,
} = {}) => {
  try {
    const posts = strapiClient.collection('posts');

    const response = await posts.find({
      sort: `${sortBy}:${sortOrder}`,
      pagination: {
        pageSize: limit,
      },
      populate: '*',
    });

    return response.data as Post[];
  } catch (error) {
    return handleError(error);
  }
};

// Método Create Post
export const getBeeBar = async () => {
  try {
    const posts = strapiClient.collection('bee-bars');
    const response = await posts.find({
      sort: 'createdAt:desc',
      populate: '*',
    });
    return response.data as BeeBar[];
  } catch (error) {
    return handleError(error);
  }
};

// Método Get BeeBar By Sort
export const getBeeBarsBySort = async ({ limit = 5 } = {}) => {
  try {
    const posts = strapiClient.collection('bee-bars');

    const response = await posts.find({
      sort: 'createdAt:desc',
      pagination: {
        pageSize: limit,
      },
      populate: '*',
    });

    return response.data as BeeBar[];
  } catch (error) {
    return handleError(error);
  }
};

// Método Get BeeBar Types
export const getBeeBarTypes = async () => {
  try {
    const posts = strapiClient.collection('bee-bar-types');
    const response = await posts.find({
      sort: 'createdAt:desc',
      populate: '*',
    });
    return response.data as BeeBarTypes[];
  } catch (error) {
    return handleError(error);
  }
};

// Método Get BeeBar Categories
export const getBeeBarCategories = async () => {
  try {
    const posts = strapiClient.collection('bee-bar-categories');
    const response = await posts.find({
      sort: 'createdAt:desc',
    });
    return response.data as BeeBarCategories[];
  } catch (error) {
    return handleError(error);
  }
};
