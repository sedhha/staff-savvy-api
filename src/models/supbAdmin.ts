import { createClient } from '@supabase/supabase-js';

// eslint-disable-next-line restrict-env-variables/no-private-env-variables
const admin = createClient(`https://${process.env.SUPERBASE_PROJECT_ID}.supabase.co`, process.env.SUPERBASE_PRIVATE_SERVICE_ROLE);

export default admin.auth.admin;
