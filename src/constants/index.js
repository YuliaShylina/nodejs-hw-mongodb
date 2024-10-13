import path from 'path';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;

export const ONE_DAY = 24 * 60 * 60 * 1000;

export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');

export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
