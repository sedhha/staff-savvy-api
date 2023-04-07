import { z } from 'zod';
import { logger } from '@utils/logger';

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string(),
  SUPERBASE_PROJECT_ID: z.string(),
  SUPERBASE_PUBLIC_CLIENT_ID: z.string(),
});
export const ValidateEnv = () => {
  const parsed = envSchema.safeParse(process.env);
  const { success } = parsed;
  if (!success) {
    logger.error(JSON.stringify(parsed));
    throw new Error('Unable to find environment variables');
  } else logger.info('All Environment Variables Successfully Loaded');
};
